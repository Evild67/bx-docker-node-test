FROM node:9-alpine

ADD index.js package.json yarn.lock ./

ENV NODE_ENV production
RUN yarn install
EXPOSE 8080
CMD ["node", "index.js"]