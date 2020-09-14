FROM node:12 AS builder
COPY . /main-website
WORKDIR /main-website
RUN yarn && yarn build

FROM nginx:1.19.2
COPY --from=builder /main-website/public /usr/share/nginx/html
