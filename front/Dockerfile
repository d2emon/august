FROM node:lts-alpine

WORKDIR /app

# Packages
COPY package*.json ./
RUN npm install

# Folders
COPY public ./public
COPY src ./src

# Envs
ENV DEBUG 1
ENV HOST 0.0.0.0

# Port to expose
EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start"]
