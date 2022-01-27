# Create the image from the latest nodejs
FROM node:16

LABEL "Author"="Mohamed Kamel" 

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json web.js /usr/src/app/
RUN npm install

# Declare Env variables
ENV TREE "Ash"

# Expose the port server listen to
EXPOSE 8080

# start webapp
CMD [ "node", "web.js" ]