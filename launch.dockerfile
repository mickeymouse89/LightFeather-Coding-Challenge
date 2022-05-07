FROM ubuntu:18.04 
COPY ./server /server
COPY ./front-end /front-end
RUN apt-get update 
RUN apt-get install –y nginx 
COPY ./nginx.conf /etc/nginx/sites-enabled/default
RUN apt-get install -y nodejs
EXPOSE 80
EXPOSE 4000
CMD /usr/sbin/nginx && node /server/index.js