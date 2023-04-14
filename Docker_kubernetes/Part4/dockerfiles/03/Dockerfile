FROM centos:7

RUN yum install httpd -y

WORKDIR /var/www/html

COPY web .

RUN echo "$(whoami)" > ./user1.html

RUN useradd sergio
RUN chown -R sergio .

USER sergio

RUN echo "$(whoami)" > ./user2.html

VOLUME ["/var/www/html"]

USER root

CMD ["apachectl", "-DFOREGROUND"]