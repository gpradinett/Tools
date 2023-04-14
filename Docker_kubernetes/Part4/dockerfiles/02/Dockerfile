FROM centos:7

RUN yum install httpd -y

COPY web /var/www/html

ENV connectionString=user@host.miempresa.com

WORKDIR /var/www/html

RUN echo "$connectionString" > ./test.html

CMD ["apachectl", "-DFOREGROUND"]