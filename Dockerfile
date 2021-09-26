FROM node:latest

WORKDIR /app

COPY package.json ./

#RUN npm install

RUN npm install react-scripts

#COPY ./node_modules /app/node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]