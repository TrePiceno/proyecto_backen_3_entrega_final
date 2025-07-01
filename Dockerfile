FROM node:20.11.0

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY ./src ./src

EXPOSE 8080

CMD ["npm", "start"]

# docker build -t trepiceno/backend-coder-image:1.0.10-lts .
# docker push trepiceno/backend-coder-image:1.0.10-lts