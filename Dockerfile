FROM node:9-alpine

ENV NODE_ENV production
ADD package.json yarn.lock ./
RUN yarn install

ADD index.js ./

EXPOSE 8080
CMD ["node", "index.js"]