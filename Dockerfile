FROM node:13

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install -g @vue/cli

RUN yarn install

ENTRYPOINT [ "yarn", "build" ]
