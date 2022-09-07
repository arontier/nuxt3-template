FROM node:16.17.0-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./application/package*.json ./application/yarn.lock* ./

RUN yarn