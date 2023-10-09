FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 4000

CMD npm start