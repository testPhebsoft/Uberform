# Use the official Node.js image with version 20 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/main

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Run the build script using Yarn
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Start the application in production mode
CMD ["yarn", "start"]
