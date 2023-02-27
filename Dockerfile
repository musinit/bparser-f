FROM node:18.13-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm config rm proxy
RUN npm config rm https-proxy
RUN npm install --verbose
COPY . ./
ENV NODE_OPTIONS --openssl-legacy-provider
RUN npm run build --configuration=production

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /src/certs/verdandi.uno.crt /etc/nginx
COPY /src/certs/verdandi.uno.key /etc/nginx
COPY --from=build /usr/src/app/dist/bparser /usr/share/nginx/html

ENV PRODUCTION true

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
