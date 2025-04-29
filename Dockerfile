# 1단계: Build Stage
FROM node:22 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build:bundle

# 2단계: Production Stage
FROM node:22-slim

WORKDIR /app

# build한 결과만 복사 (node_modules는 prod용만)
COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

RUN yarn install --production

ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "dist/main.js"]