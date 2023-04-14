FROM alpine/git as GIT

WORKDIR /app

RUN git clone https://github.com/cursosdevfull/angular_group06.git

############

FROM node:16.13.1-alpine as NODEJS

# RUN apk add --no-cache git

WORKDIR /app

COPY --from=GIT /app/angular_group06/package*.json .

RUN npm install

COPY --from=GIT /app/angular_group06 .

RUN npm run build --prod

############

FROM nginx:1.20.2-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=NODEJS /app/dist/ambulance /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]