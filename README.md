# LAB1: COWSAY

## NOTES:  
**Docker containers** are isolated environments. The base image you choose (e.g., debian, ubuntu, alpine) runs inside the container, not on your host machine (your Ubuntu laptop).
Your host machine’s OS (Ubuntu) doesn’t affect the container’s OS. The container uses the OS defined in its base image (e.g., Debian).  
  
**Example:**  
  
If you use FROM debian:latest in your Dockerfile, the container will run Debian, regardless of whether your laptop runs Ubuntu, Windows, or macOS.
This is one of the powers of Docker: consistency across environments.  
  
  
On **Debian-based systems** (like Debian or Ubuntu), the cowsay package installs its executable in `/usr/games/` by default.  
However, this directory might be empty on your host machine (your Ubuntu laptop) because:
  
-> You haven’t installed cowsay directly on your laptop.  
-> The `/usr/games` directory inside the Docker container is separate from your host machine’s `/usr/games`.  
-> The cowsay package is installed inside the container, not on your laptop.  
-> The executable will be placed in `/usr/games/cowsay `inside the container.  
  
  ------

## HOW TO RUN THE DOCKERFILE ??
1-Put urself inside `LAB1` folder
2-BUILD THE IMAGE USING THIS COMMAND:
```shell
docker build -t cowsay-image .
```
3-create a container instance from ur image(cowsay-image)
```shell
docker run cowsay-image
```
4-output:
```shell
___________________
< docker is awesome >
 -------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```


