FROM node:14-alpine

WORKDIR /bookingcare/backend

COPY package*.json ./

RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .

RUN npm run build-src

CMD ["npm", "run", "build"]

#docker build --tag node-docker .
#docker run -p 8000:8000 -d node-docker