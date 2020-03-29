FROM node:12.2.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# install and cache app dependencies
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

# copy all project files into the image
COPY .  /usr/src/app/

EXPOSE 4000

RUN yarn build

CMD [ "node", "dist/" ]