# Deploy Plan - Camp Alta

## Overview
Set up a deploy pipeline for Camp Alta (Nuxt 3 frontend + FastAPI backend) following the same pattern as pelayo/prado_mayor. Push to `develop` → GitHub Actions → Docker → Harbor → Deploy VM → `campalta.silatek.net`

---

## Steps

### Step 1: Create `frontend/Dockerfile`
Multi-stage Nuxt build (node:20-alpine). Builds the app and serves via `.output/server/index.mjs` on port 3000.

### Step 2: Create `frontend/.dockerignore`
Exclude node_modules, .output, .nuxt, .git, .env, etc.

### Step 3: Create `backend/Dockerfile`
Python 3.12-slim base. Install deps, run uvicorn on port 8000.

### Step 4: Create `backend/.dockerignore`
Exclude __pycache__, .env, .git, etc.

### Step 5: Create `docker-compose.dev-deploy.yml` (repo root)
Two services: frontend (port 3000) + backend (port 8000). Both pull from Harbor.

### Step 6: Create `.github/workflows/deploy_dev.yml`
GitHub Actions workflow triggered on push to `develop`. Builds both images, pushes to Harbor, deploys via SSH.

### Step 7: Commit all files to `main`

### Step 8: Create and push `develop` branch

---

## Post-setup (manual)
- [ ] Add runner at `http://192.168.9.237:5173/runners` (VPN required)
- [ ] Add GitHub secrets: `DEPLOY_USER`, `DEPLOY_HOST`
- [ ] Confirm Harbor project name and update workflow
- [ ] Create `~/apps/campalta_dev/.env` on deploy VM with SMTP creds, reCAPTCHA key, ports
- [ ] Configure Cloudflare tunnel + Traefik for `campalta.silatek.net`
