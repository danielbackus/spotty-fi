FROM node:lts-slim

WORKDIR /server

COPY package*.json /server/

RUN npm install --silent

COPY . /server/

CMD [ "npm", "start" ]
