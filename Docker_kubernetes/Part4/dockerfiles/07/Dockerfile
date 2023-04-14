FROM node:16.13.1-alpine as NODEJS

WORKDIR /app

COPY angular_group06/package*.json .

RUN npm install

COPY angular_group06/ .

RUN npm run build --prod

############

FROM nginx:1.20.2-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=NODEJS /app/dist/ambulance /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]