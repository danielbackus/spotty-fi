FROM node:lts-slim

WORKDIR /server

COPY package*.json /server/

RUN npm install --silent

COPY . /server/

EXPOSE 3000
CMD [ "npm", "start" ]
