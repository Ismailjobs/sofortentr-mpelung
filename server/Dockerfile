FROM node:22-alpine
WORKDIR /app

COPY server/package.json ./server/
RUN cd server && npm install

COPY shared/contact ./shared/contact
COPY server/tsconfig.json ./server/
COPY server/src ./server/src

WORKDIR /app/server

ENV NODE_ENV=production
ENV PORT=4000
EXPOSE 4000

CMD ["npx", "tsx", "src/index.ts"]
