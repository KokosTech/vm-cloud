FROM node:lts-alpine as builder

WORKDIR /app
COPY package.json package-lock.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
RUN yarn build

FROM nginx:alpine as runner
COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf