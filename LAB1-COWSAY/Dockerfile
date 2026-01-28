# Layer 1: Start with a base image
FROM debian:latest

# Layer 2 : Update the package list and install cowsay
RUN apt-get update && apt-get install -y cowsay

#the default command that will be executed when a container starts from the image
CMD ["/usr/games/cowsay", "docker is awesome"]