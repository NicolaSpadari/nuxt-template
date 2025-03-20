FROM node:23.5.0-alpine AS node-builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@9.15.3 --activate
WORKDIR /app
COPY . .
RUN pnpm i
RUN pnpm generate

FROM nginx:alpine
COPY --from=node-builder /app/.output/public /usr/share/nginx/html