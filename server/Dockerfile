FROM node:12 as tsc-builder
WORKDIR /usr/src/app

COPY . .
RUN yarn install && yarn run build

FROM node:12 as runtime-container
WORKDIR /usr/src/app

COPY --from=tsc-builder /usr/src/app/build ./build
COPY --from=tsc-builder ["/usr/src/app/package.json", "/usr/src/app/yarn.lock", "./"]

RUN yarn install --prod

EXPOSE 5000

CMD [ "node", "./build/index.js" ]