#stage 1
FROM node:latest as node
WORKDIR /src
COPY . .
RUN npm install
RUN npm run ng build --prod
#stage 2
FROM nginx:alpine
COPY /src/dist/bit-dungeon /usr/share/nginx/html