FROM node:16.13.1-alpine

ARG BASE_DIR="frontend"

WORKDIR /app

COPY ${BASE_DIR}/package*.json ./

RUN npm install

COPY ${BASE_DIR}/. .

CMD ["npm", "start"]