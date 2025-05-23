FROM node:23.11.1-alpine3.21

RUN apk update && apk upgrade


WORKDIR /app


COPY . .


RUN npm install 


CMD ["npm", "run", "dev"]

