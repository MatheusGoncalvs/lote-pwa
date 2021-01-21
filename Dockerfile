# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY  package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng build --prod

# stage 2

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=my-app-build /app/dist/leitura-excel /usr/share/nginx/html
EXPOSE 80