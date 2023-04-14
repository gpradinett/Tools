FROM centos:7

RUN yum install httpd -y

COPY run.sh /run.sh

WORKDIR /var/www/html

COPY web .

CMD ["sh", "/run.sh"]