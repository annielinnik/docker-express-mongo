FROM node:8
WORKDIR /usr/src/app
COPY package.json server.js ./
RUN npm install
CMD [ "npm", "start" ]