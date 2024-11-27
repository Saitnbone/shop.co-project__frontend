# # syntax=docker/dockerfile:1

# 
FROM node:20-slim AS build

WORKDIR /app 

COPY package*.json ./
RUN npm install 

COPY . .

RUN npm run build

# Запуск сервера для статической сборки

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]