# Express contact API (sofort-server) — yalnızca production bağımlılıkları
FROM node:22-alpine AS deps
WORKDIR /app
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --omit=dev

FROM node:22-alpine AS runner
WORKDIR /app/server

ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nodejs

COPY --from=deps --chown=nodejs:nodejs /app/server/node_modules ./node_modules
COPY --chown=nodejs:nodejs server/tsconfig.json ./
COPY --chown=nodejs:nodejs server/src ./src
COPY --chown=nodejs:nodejs shared/contact ../shared/contact

USER nodejs
EXPOSE 4000
ENV PORT=4000
ENV HOST=0.0.0.0

CMD ["node", "--import", "tsx", "src/index.ts"]
