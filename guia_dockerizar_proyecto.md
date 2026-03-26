# Guia para dockerizar y preparar un proyecto para CI/CD

Esta guia explica **que archivos necesita tu proyecto** para funcionar con nuestro pipeline de despliegue automatico. Seguila al pie de la letra.

---

## 1. Como funciona el pipeline (resumen)

1. Haces `git push` a `develop` o `main`
2. Un runner self-hosted construye la imagen Docker, verifica que arranca, y la sube a un registry privado (Harbor)
3. El runner copia el docker-compose al servidor de apps y ejecuta `docker compose pull && up -d`

Tu unica responsabilidad es que el proyecto tenga los archivos correctos. El resto es automatico.

---

## 2. Branches y entornos

| Branch | Entorno | Sufijo imagen | Compose de deploy | Carpeta en servidor |
|--------|---------|---------------|-------------------|---------------------|
| `develop` | dev | `_dev` | `docker-compose.dev-deploy.yml` | `~/apps/<app>_dev/` |
| `main` | prod | `_prod` | `docker-compose.prod.yml` | `~/apps/<app>_prod/` |

---

## 3. Convenciones de naming

- Nombres de imagenes: **solo** `[a-zA-Z0-9_]`. Usar underscores (`_`), **NUNCA guiones** (`-`)
- Patron single-service: `<proyecto_harbor>/<app>_dev`, `<proyecto_harbor>/<app>_prod`
- Patron multi-service: `<proyecto_harbor>/<app>_frontend_dev`, `<proyecto_harbor>/<app>_backend_dev`

Ejemplos correctos:
- `ridid/ridid_cleaning_app_dev`
- `webs_hoteles/pradomayor_frontend_prod`

Ejemplos **incorrectos**:
- `ridid/ridid-cleaning-app_dev` (guiones en nombre)
- `webs_hoteles/pradomayor-frontend_prod` (guion entre app y servicio)

---

## 4. Archivos necesarios en el proyecto

### 4.1 Dockerfile (produccion, multistage)

Adaptar segun el tipo de proyecto:

#### Proyectos con servidor Node (Nuxt, Next, Express, FastAPI...)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --prefer-offline
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.output ./.output
RUN addgroup -S app && adduser -S app -G app
USER app
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

#### Proyectos SPA (Vue CLI, CRA, Vite con SPA) — servidos con nginx

Los frameworks SPA generan archivos estaticos (`dist/`) que necesitan un servidor web. Se usa nginx porque es ligero (~25MB vs ~180MB de Node) y maneja bien SPA routing, gzip y cache.

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --prefer-offline
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN addgroup -S app && adduser -S app -G app && \
    chown -R app:app /usr/share/nginx/html && \
    chown -R app:app /var/cache/nginx && \
    chown -R app:app /var/log/nginx && \
    touch /var/run/nginx.pid && chown app:app /var/run/nginx.pid
USER app
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
```

> El `ENV NODE_OPTIONS=--openssl-legacy-provider` solo es necesario si el proyecto usa versiones antiguas de webpack (Vue CLI 4, CRA 4, etc.). Quitarlo si no da error de OpenSSL.

Este tipo de proyecto necesita un archivo `nginx.conf` adicional (ver seccion 4.9).

**Notas importantes:**

- Adapta el `CMD` al framework:
  - Nuxt 3: `node .output/server/index.mjs`
  - Next.js: `node server.js` (con `output: 'standalone'`)
  - FastAPI: `uvicorn app.main:app --host 0.0.0.0 --port 8000`
  - SPA con nginx: `nginx -g "daemon off;"`
- Adapta el `EXPOSE` al puerto real de la app
- Si el build necesita dependencias nativas (`python3`, `make`, `g++`), usar `node:20-bookworm-slim` en vez de `alpine`:

```dockerfile
FROM node:20-bookworm-slim AS builder
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
WORKDIR /app
# ... resto igual
```

- Si hay problemas con postinstall scripts (ej: oxc-parser), usar `npm ci --ignore-scripts` seguido de `npx nuxt prepare` (o el prepare del framework) por separado
- El Dockerfile.dev debe usar la **misma imagen base** que el de produccion para evitar discrepancias

### 4.2 Dockerfile.dev (desarrollo local con hot-reload)

#### Proyectos Node genericos

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --prefer-offline
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

#### Proyectos Vue CLI

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci --prefer-offline
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 3000
CMD ["npx", "vue-cli-service", "serve", "--host", "0.0.0.0", "--port", "3000"]
```

### 4.3 .dockerignore

```
node_modules
dist
.cache
.git
.env
.env.local
.env.*.local
.DS_Store
.vscode
.claude
*.md
docker-compose*.yml
Dockerfile.dev
```

**IMPORTANTE**: NO excluir `.env.production` ni `.env.development`. Los frameworks frontend (Vue CLI, CRA, Vite) leen estos archivos durante `npm run build` para inyectar variables de entorno en el JavaScript. Si los excluyes, las variables como `VUE_APP_BASE_URL` quedaran como `undefined` y la app no funcionara.

Solo se excluyen:
- `.env` — el generico, que puede contener secrets locales
- `.env.local` y `.env.*.local` — overrides locales que nunca deben ir al build

### 4.4 docker-compose.yml (desarrollo local)

```yaml
services:
  <app>:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container_name: <app>-dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    env_file: .env
```

> Para proyectos multi-servicio (frontend + backend), ver seccion 7.

### 4.5 docker-compose.prod.yml (deploy produccion)

```yaml
services:
  <app>_prod:
    image: ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:latest
    container_name: <app>_prod
    restart: unless-stopped
    ports:
      - "${DEPLOY_PORT}:3000"
    env_file: .env
```

**Importante**: NO hardcodear puertos, registry ni nombre de imagen. Todo va en variables que se leen del `.env` en el servidor. Las variables son:

| Variable | Ejemplo | Descripcion |
|----------|---------|-------------|
| `DEPLOY_PORT` | `3001` | Puerto externo en el servidor |
| `REGISTRY` | `registry.silatek.net` | URL del registry Docker |
| `PROJECT` | `ridid` | Proyecto en Harbor |
| `IMAGE_NAME` | `ridid_cleaning_app_prod` | Nombre de la imagen |

### 4.6 docker-compose.dev-deploy.yml (deploy develop)

Identico al anterior pero con nombres `_dev`:

```yaml
services:
  <app>_dev:
    image: ${REGISTRY}/${PROJECT}/${IMAGE_NAME}:latest
    container_name: <app>_dev
    restart: unless-stopped
    ports:
      - "${DEPLOY_PORT}:3000"
    env_file: .env
```

### 4.7 .github/workflows/deploy_dev.yml

> **IMPORTANTE**: no usar `${{ secrets.* }}` directamente en lineas con `\` (continuacion de linea). GitHub enmascara los secrets y puede romper el comando. Siempre pasar secrets como variables de entorno del step y limpiar con `tr -d '[:space:]'`.

```yaml
name: Deploy Develop

on:
  push:
    branches: [develop]

env:
  REGISTRY: registry.silatek.net
  PROJECT: <proyecto_harbor>
  IMAGE_NAME: <app>_dev
  APP_PORT: "3000"              # Puerto interno del contenedor (ajustar segun framework)

jobs:
  build-and-deploy:
    runs-on: [self-hosted, linux, proxmox]

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Build imagen
        run: |
          IMAGE=${{ env.REGISTRY }}/${{ env.PROJECT }}/${{ env.IMAGE_NAME }}
          docker build \
            -t ${IMAGE}:latest \
            -t ${IMAGE}:${{ github.sha }} \
            .

      - name: Verificar contenedor
        run: |
          IMAGE=${{ env.REGISTRY }}/${{ env.PROJECT }}/${{ env.IMAGE_NAME }}
          CONTAINER="test-${GITHUB_SHA::8}"
          docker run -d --name ${CONTAINER} \
            -p 0:${{ env.APP_PORT }} \
            ${IMAGE}:latest
          sleep 5
          PORT=$(docker port ${CONTAINER} ${{ env.APP_PORT }} | cut -d: -f2)
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:${PORT})
          docker rm -f ${CONTAINER}
          if [ "$STATUS" != "200" ]; then
            echo "ERROR: HTTP $STATUS"
            exit 1
          fi
          echo "OK: HTTP $STATUS"

      - name: Push a Harbor
        run: |
          IMAGE=${{ env.REGISTRY }}/${{ env.PROJECT }}/${{ env.IMAGE_NAME }}
          docker push ${IMAGE}:latest
          docker push ${IMAGE}:${{ github.sha }}

      - name: Sync compose a VM
        env:
          DEPLOY_USER: ${{ secrets.DEPLOY_USER }}
          DEPLOY_HOST: ${{ secrets.DEPLOY_HOST }}
        run: |
          USER=$(echo "$DEPLOY_USER" | tr -d '[:space:]')
          HOST=$(echo "$DEPLOY_HOST" | tr -d '[:space:]')
          scp -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no ./docker-compose.dev-deploy.yml "${USER}@${HOST}:~/apps/<app>_dev/"

      - name: Deploy via SSH
        env:
          DEPLOY_USER: ${{ secrets.DEPLOY_USER }}
          DEPLOY_HOST: ${{ secrets.DEPLOY_HOST }}
        run: |
          USER=$(echo "$DEPLOY_USER" | tr -d '[:space:]')
          HOST=$(echo "$DEPLOY_HOST" | tr -d '[:space:]')
          ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no "${USER}@${HOST}" "cd ~/apps/<app>_dev && docker compose -f docker-compose.dev-deploy.yml pull && docker compose -f docker-compose.dev-deploy.yml up -d --remove-orphans && docker image prune -f"

      - name: Limpiar runner
        if: always()
        run: docker image prune -f
```

**Valores a reemplazar:**
- `<proyecto_harbor>`: nombre del proyecto en Harbor (ej: `ridid`, `webs_hoteles`)
- `<app>`: nombre de la app (ej: `ridid_cleaning_app`)
- `APP_PORT`: puerto interno del contenedor (3000 para Nuxt/Next/SPA con nginx, 8000 para FastAPI, etc.)

### 4.8 .github/workflows/deploy_prod.yml

Identico al de develop pero con estos cambios:

```yaml
name: Deploy Production
on:
  push:
    branches: [main]              # main en vez de develop

env:
  IMAGE_NAME: <app>_prod          # _prod en vez de _dev

# En Sync compose y Deploy via SSH:
# - Usar docker-compose.prod.yml en vez de dev-deploy
# - Usar ~/apps/<app>_prod/ en vez de _dev
```

### 4.9 nginx.conf (solo para proyectos SPA)

Solo necesario si el Dockerfile de produccion usa nginx (proyectos SPA). Sirve los archivos estaticos, maneja SPA routing y aplica compresion gzip.

```nginx
server {
    listen 3000;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    location ~* \.(?:css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location = /service-worker.js {
        expires off;
        add_header Cache-Control "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Puntos clave:
- `listen 3000` — debe coincidir con el `EXPOSE` del Dockerfile y el `APP_PORT` del workflow
- `try_files $uri $uri/ /index.html` — redirige todas las rutas a `index.html` para que funcione el router del SPA
- Cache de 1 ano para CSS/JS (los archivos llevan hash en el nombre, asi que se invalidan solos al cambiar)
- Sin cache para `service-worker.js` (debe actualizarse siempre)

---

## 5. Variables de entorno

### 5.1 Variables de la app (build time vs runtime)

Hay una distincion importante segun el framework:

#### Frameworks SPA (Vue CLI, CRA, Vite SPA) — build time

Las variables como `VUE_APP_*`, `REACT_APP_*` o `VITE_*` se inyectan en el JavaScript durante `npm run build`. Quedan hardcodeadas en los `.js` estaticos. **No se pueden cambiar en runtime.**

Se definen en archivos `.env.production` y `.env.development` **dentro del repo**:

```env
# .env.production
VUE_APP_BASE_URL=https://api.example.com

# .env.development
VUE_APP_BASE_URL=https://apidev.example.com:5000
```

`npm run build` siempre lee `.env.production`. `npm run serve` lee `.env.development`. No es necesario pasar `--build-arg` en el Dockerfile ni en el workflow — basta con que los `.env.*` esten en el repo y **no esten excluidos en el `.dockerignore`**.

> Estas variables no son sensibles (son URLs publicas de APIs). Si una variable es sensible, no deberia estar en el frontend.

#### Frameworks con runtime (Nuxt 3, Next.js, FastAPI) — runtime

Variables como `NUXT_PUBLIC_*` o `DATABASE_URL` se leen al arrancar el contenedor. Se definen en el `.env` del servidor (ver seccion 6).

### 5.2 Variables del pipeline (en el servidor)

El `.env` **NO se commitea al repo**. Lo gestiona la persona que administra los servidores. Anadelo al `.gitignore`.

El `.env` en el servidor (`~/apps/<app>_dev/.env` o `~/apps/<app>_prod/.env`) contiene:

```env
DEPLOY_PORT=3001
REGISTRY=registry.silatek.net
PROJECT=<proyecto_harbor>
IMAGE_NAME=<app>_dev
```

Para frameworks con runtime, anadir las variables de la app aqui:

```env
# Nuxt 3
NUXT_PUBLIC_BASE_URL=https://api.example.com

# FastAPI / backend generico
# DATABASE_URL=postgresql://...
# SECRET_KEY=changeme
```

---

## 6. Secrets de GitHub

Configurar en: Settings > Secrets and variables > Actions > Repository secrets

| Secret | Valor | Descripcion |
|--------|-------|-------------|
| `DEPLOY_HOST` | IP del servidor de apps | Ej: `192.168.9.219` |
| `DEPLOY_USER` | `silatek` | Usuario SSH en el servidor |

**Solo estos dos.** El runner ya tiene login a Harbor y la clave SSH configurados.

> **CUIDADO**: al crear los secrets, NO dejar espacios ni saltos de linea al final. GitHub no los recorta y esto causa errores como `Could not resolve hostname`. Si ves ese error, lo primero es recrear los secrets.

---

## 7. Proyectos multi-servicio (frontend + backend)

### Naming de imagenes

| Servicio | Imagen dev | Imagen prod |
|----------|-----------|-------------|
| Frontend | `<proyecto>/<app>_frontend_dev` | `<proyecto>/<app>_frontend_prod` |
| Backend | `<proyecto>/<app>_backend_dev` | `<proyecto>/<app>_backend_prod` |

### Workflow adaptado

El workflow construye y pushea ambas imagenes:

```yaml
env:
  REGISTRY: registry.silatek.net
  PROJECT: <proyecto_harbor>
  FRONTEND_IMAGE: <app>_frontend_dev
  BACKEND_IMAGE: <app>_backend_dev
  FRONTEND_PORT: "3000"
  BACKEND_PORT: "8000"
```

Steps de build separados:

```yaml
- name: Build frontend
  run: |
    FRONT=${{ env.REGISTRY }}/${{ env.PROJECT }}/${{ env.FRONTEND_IMAGE }}
    docker build -f frontend/Dockerfile -t ${FRONT}:latest -t ${FRONT}:${{ github.sha }} frontend/

- name: Build backend
  run: |
    BACK=${{ env.REGISTRY }}/${{ env.PROJECT }}/${{ env.BACKEND_IMAGE }}
    docker build -f backend/Dockerfile -t ${BACK}:latest -t ${BACK}:${{ github.sha }} backend/
```

### docker-compose.dev-deploy.yml (multi-servicio)

```yaml
services:
  frontend:
    image: ${REGISTRY}/${PROJECT}/${IMAGE_FRONTEND}:latest
    container_name: <app>_dev_frontend
    restart: unless-stopped
    ports:
      - "${DEPLOY_PORT}:3000"
    environment:
      - NUXT_API_BACKEND_URL=http://backend:8000
    env_file: .env
    networks:
      - <app>_dev
    depends_on:
      - backend

  backend:
    image: ${REGISTRY}/${PROJECT}/${IMAGE_BACKEND}:latest
    container_name: <app>_dev_backend
    restart: unless-stopped
    expose:
      - "8000"
    env_file: .env
    networks:
      - <app>_dev

networks:
  <app>_dev:
    driver: bridge
```

### .env en el servidor (multi-servicio)

```env
DEPLOY_PORT=3001
REGISTRY=registry.silatek.net
PROJECT=webs_hoteles
IMAGE_FRONTEND=pradomayor_frontend_dev
IMAGE_BACKEND=pradomayor_backend_dev
```

Nota: se usa `IMAGE_FRONTEND` e `IMAGE_BACKEND` en vez de `IMAGE_NAME`.

### docker-compose.yml (desarrollo local, multi-servicio)

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.dev
    container_name: <app>-local-frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - NUXT_API_BACKEND_URL=http://backend:8000
    env_file: .env
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: <app>-local-backend
    ports:
      - "8000:8000"
    env_file: .env
```

Puntos clave:
- El frontend usa `ports:` (accesible desde el host y desde Traefik)
- El backend usa `expose:` en deploy (solo accesible dentro de la red Docker) pero `ports:` en local (para debug)
- La comunicacion frontend→backend usa DNS interno de Docker (`http://backend:8000`). Adaptar el nombre de la variable de entorno al framework

---

## 8. Checklist

### Archivos en el proyecto:

- [ ] `Dockerfile` — produccion, multistage, adaptar CMD y EXPOSE al framework
- [ ] `Dockerfile.dev` — desarrollo local con hot-reload
- [ ] `.dockerignore` — NO excluir `.env.production` ni `.env.development`
- [ ] `nginx.conf` — solo si es SPA con nginx
- [ ] `docker-compose.yml` — desarrollo local
- [ ] `docker-compose.prod.yml` — deploy produccion (con variables `${REGISTRY}`, `${DEPLOY_PORT}`, etc.)
- [ ] `docker-compose.dev-deploy.yml` — deploy develop (idem)
- [ ] `.github/workflows/deploy_prod.yml` — workflow produccion
- [ ] `.github/workflows/deploy_dev.yml` — workflow develop
- [ ] `.env` y `.env.local` en `.gitignore` (pero `.env.production` y `.env.development` SI se commitean)

### Verificaciones:

- [ ] Build local funciona: `docker compose up --build` → app responde HTTP 200
- [ ] Build produccion funciona: `docker build -t test . && docker run -d -p 3001:3000 test` → HTTP 200
- [ ] Los compose de deploy usan variables (`${REGISTRY}`, `${DEPLOY_PORT}`), NO valores hardcodeados
- [ ] Los nombres de imagenes usan underscores, no guiones
- [ ] Para SPAs: verificar que las variables `VUE_APP_*` / `REACT_APP_*` se inyectan correctamente (abrir consola del navegador y comprobar que las peticiones API van a la URL correcta)

### En GitHub (lo hace el admin):

- [ ] Crear repository secrets: `DEPLOY_HOST` y `DEPLOY_USER`

---

## 9. Errores comunes

### SCP/SSH falla con `Could not resolve hostname`

**Causa**: secrets de GitHub con espacios o saltos de linea al final.
**Solucion**: borrar y recrear los secrets. En el workflow, siempre limpiar con `tr -d '[:space:]'`.

### Build falla por dependencias nativas (node-gyp, oxc-parser)

**Causa**: `node:20-alpine` no incluye compiladores nativos.
**Solucion**: usar `node:20-bookworm-slim` + `apt-get install -y python3 make g++`.

### Health check falla (HTTP != 200)

**Causas posibles**:
- La app necesita variables de entorno para arrancar (ej: `NUXT_PUBLIC_BASE_URL`). Anadir `-e VAR=valor` en el `docker run` del health check
- El `sleep 5` no es suficiente. Aumentar a 10-15s si la app tarda en arrancar
- El `APP_PORT` del workflow no coincide con el `EXPOSE` del Dockerfile

### El compose de deploy no interpreta las variables

**Causa**: no existe `.env` en la carpeta de la app en el servidor.
**Solucion**: crear el `.env` con `DEPLOY_PORT`, `REGISTRY`, `PROJECT`, `IMAGE_NAME` antes del primer deploy.

### Peticiones API van a la IP del servidor en vez de a la URL de la API (SPA)

**Causa**: los archivos `.env.production` / `.env.development` estan excluidos en el `.dockerignore`, asi que `npm run build` no puede leerlos y las variables como `VUE_APP_BASE_URL` quedan como `undefined`.
**Solucion**: en el `.dockerignore`, excluir solo `.env`, `.env.local` y `.env.*.local`. Dejar que `.env.production` y `.env.development` entren en el build.

### Error 405 (Not Allowed) en peticiones POST a la app

**Causa**: es nginx devolviendo 405 porque recibe un POST en una ruta estatica. Significa que las peticiones API no estan saliendo hacia el backend sino que se quedan en el propio frontend. Revisar que `VUE_APP_BASE_URL` (o equivalente) tiene el valor correcto (ver error anterior).
