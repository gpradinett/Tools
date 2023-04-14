FROM node:16.13.1-alpine as BUILD

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

############

FROM node:16.13.1-alpine

WORKDIR /app

COPY --from=BUILD /app/package*.json .

COPY --from=BUILD /app/node_modules/ ./node_modules

COPY --from=BUILD /app/cache ./cache

CMD ["npm", "run", "start"]