# Use an official lightweight Node.js image as a base
FROM alpine:latest

ENV NODE_VERSION 21.6.1

# Install Node.js and NPM
RUN apk --no-cache add nodejs npm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port where the app will run
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
