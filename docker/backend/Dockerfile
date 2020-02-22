FROM node:12.11.1

RUN echo "Europe/Warsaw" > /etc/timezone && npm i -g yarn nodemon

ENTRYPOINT yarn && yarn start:dev
