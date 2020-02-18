FROM node:alpine

WORKDIR /FSMarket
ADD . .

ENV PORT=8080

RUN npm install
ENTRYPOINT ["node", "app.js"]
