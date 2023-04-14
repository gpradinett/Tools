# Commandos

### Listar contenedores que solo se están ejecutando

```
docker ps
```

### Listar contenedores que se están ejecutando y estan detenidos

```
docker ps -a
```

### Listar contenedores que se están ejecutando

```
docker ps -a -q
```

### Listar contenedores que se están ejecutando

```
docker ps -a --filter ancestor=mysql:8
```

### Para vincularnos a un contenedor ejecutándose

```
docker attach <nombre contenedor>
```

### Para crear un contenedor vinculando los puertos host y contenedor

```
docker run -d --name servernginx -p 8080:80 nginx
```

### Para ingresar a un contenedor ejecutándose

```
docker exec servernginx bash
```

### Para crear una imagen desde un contenedor

```
docker commit servernginx image_custom
```

### Para crear una copia de una imagen

```
docker tag image_custom 2344458484848.ecr.aws.com/image_custom
```

### Para subir imágenes a un repositorio en la nube

```
docker push 2344458484848.ecr.aws.com/image_custom
```

### Para acceder a los logs

```
docker logs servernginx
docker logs --tail 10 -f servernginx
```

### Para crear contenedores "temporales"

```
docker run -d --rm --name servernginx03 -p 9200:80 -e name=sergio -e lastname=hidalgo nginx
```
