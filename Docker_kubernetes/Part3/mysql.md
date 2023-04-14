# Crear un contenedor de MySQL

### Para crearlo

```
docker run -d --name mysql_server -p 5100:3306 -e MYSQL_ROOT_PASSWORD=12345 mysql:8
```

### Para instalar un cliente de MySQL (phpmyadmin)

```
docker run -d --name phpmyadmin -e PMA_ARBITRARY=1 -p 9100:80 phpmyadmin:fpm-alpine
```

---

### Para crear un contenedor con una red

```
docker run -d --name mysql_server -p 5100:3306 -e MYSQL_ROOT_PASSWORD=12345 --network net-mysql mysql:8
```

### Para crear un cliente MySQL (phpmyadmin) con una red

```
docker run -d --name phpmyadmin -e PMA_ARBITRARY=1 -p 9100:80 --network net-mysql phpmyadmin
```
