FROM node:20-alpine

WORKDIR /home/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node","index.js"]