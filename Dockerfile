FROM brereton/rpi3node
MAINTAINER joann.brereton@gmail.com

RUN apt-get update && \
    apt-get -qy install	git \
		nano

RUN git clone https://github.com/SuperJedrzej/todo-list-angular.git todo-list-angular

WORKDIR todo-list-angular
RUN npm install
CMD ["npm","start"]