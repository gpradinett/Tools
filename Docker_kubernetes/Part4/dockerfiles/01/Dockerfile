FROM centos:7

RUN yum install httpd -y

COPY web /var/www/html

CMD ["apachectl", "-DFOREGROUND"]