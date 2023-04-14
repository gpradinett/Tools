# Wordpress

### Crear una base de datos MySQL

```
docker volume create data_mysql_wp

docker network create net-wp

docker run -d --name mysql_server_wp -p 5800:3306 -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=wp_db -e MYSQL_USER=user_wp -e MYSQL_PASSWORD=54321 -v data_mysql_wp:/var/lib/mysql --network net-wp mysql:8
```

### Crear contenedor de Wordpress

```
docker volume create data_wp

docker run -d --name app_wp -p 5600:80 --network net-wp -e WORDPRESS_DB_HOST=mysql_server_wp -e WORDPRESS_DB_USER=user_wp -e WORDPRESS_DB_PASSWORD=54321 -e WORDPRESS_DB_NAME=wp_db -v data_wp:/var/www/html wordpress
```
