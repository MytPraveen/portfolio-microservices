# =========================
# Build stage
# =========================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY server.js ./


# =========================
# Runtime stage
# =========================
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server.js ./
COPY --from=builder /app/package.json ./

USER node

EXPOSE 3001

CMD ["node", "server.js"]
