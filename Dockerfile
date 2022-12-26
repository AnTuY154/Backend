FROM node:10

#app directory
WORKDIR /usr/src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node","index.js"]
