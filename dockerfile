FROM node:18.12

WORKDIR /lib

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start" ]