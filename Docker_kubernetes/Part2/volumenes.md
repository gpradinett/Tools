# Volúmenes

### Para crear un volúmen tipo host

```
docker run -d --name servernginx03 -p 8888:80 -v D:\\Cursos\\Docker_Kubernetes_Group05\\Clase02\\html:/usr/share/nginx/html nginx
```

### Para crear un volúmen tipo host (en terminales tipo linux)

```
docker run -d --name servernginx03 -p 8888:80 -v $(pwd)\\html\:/usr/share/nginx/html nginx
```

### Para crear un volúmen tipo host (powershell)

```
docker run -d --name servernginx03 -p 8888:80 -v ${PWD}\html:/usr/share/nginx/html nginx
```

### Para crear un volúmen tipo host (cmd)

```
docker run -d --name servernginx03 -p 8888:80 -v %cd%\html:/usr/share/nginx/html nginx
```

### Para crear un volúmen tipo anónimo

```
docker run -d --name servernginx03 -p 8888:80 -v /usr/share/nginx/html nginx
```

### Para eliminar un contenedor y su volumen anónimo

```
docker rm -fv servernginx03
```

### Para crear un volumen nombrado

```
docker volume create vol_nginx
```

### Para listar los volúmenes

```
docker volume ls
```

### Para listar los volúmenes

```
docker volume inspect vol_nginx
```

### Para vincular un volumen nombrado a un contenedor

```
docker run -d --name servernginx03 -p 8888:80 -v vol_nginx:/usr/share/nginx/html nginx
```

### Para listar volúmenes huérfanos

```
docker volume ls -f dangling=true
```

### Para listar volúmenes huérfanos

```
docker volume rm <nombre del volumen>
```

### Eliminar volúmenes huérfanos

```
docker volume ls -f dangling=true -q | xargs docker volume rm
```
