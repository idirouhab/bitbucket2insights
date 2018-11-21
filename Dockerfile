FROM node:8.10.0-alpine

EXPOSE 3000

RUN apk add --no-cache git && \
    npm install -g npm@6

WORKDIR /app/api

COPY ["package*.json", "/app/api/"]

RUN npm ci --production

COPY . /app/api

CMD ["npm", "start"]
