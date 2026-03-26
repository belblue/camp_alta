FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
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
