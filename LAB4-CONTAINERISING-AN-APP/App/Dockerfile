# Use a minimal(light weight) Alpine Linux as the base image
FROM alpine:latest

# Maintainer information
LABEL author="your.email@example.com"

# Install Node.js and npm
RUN apk update && apk add nodejs npm

# Set up the working directory
WORKDIR /usr/app

# Copy the application files from ur current directory  into /usr/app(inside the container)
COPY . /usr/app

# Install application dependencies
RUN npm install

# Expose the port for the Node.js application
EXPOSE 3000

# Run the application
CMD ["node", "app.js"]