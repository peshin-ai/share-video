FROM node:18-alpine

WORKDIR /app 

COPY package*.json .

ENV VITE_API_BASE_URL=http://localhost:5000

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]