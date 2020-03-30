FROM node:12.2.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# server to run the app on port 5000
RUN yarn global  add serve
CMD serve -s build
EXPOSE 5000

# install and cache app dependencies
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --silent

# copy all project files into the image
COPY .  /usr/src/app/

RUN yarn build