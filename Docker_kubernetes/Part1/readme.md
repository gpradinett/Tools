# Commandos

### Listar imágenes

```
docker images
docker image ls
```

### Inspeccionar una imagen

```
docker image inspect <nombre de imagen>
```

### Crear y ejecutar un contenedor

```
docker run <nombre de la imagen>
```

### Crear y ejecutar un contenedor con nombre

```
docker run --name <nombre del contenedor> <nombre de la imagen>
```

### Sobreescribir el comando de inicio

```
docker run <nombre de la imagen> <nombre del comando>
```

### Descargar una imagen

```
docker pull <nombre de la imagen>
```

### Crear contenedor sin iniciarlo

```
docker create <nombre de la imagen>
```

### Crear contenedor sin iniciarlo pero con nombre

```
docker create --name <nombre del contenedor> <nombre de la imagen>
```

### Iniciar un contenedor

```
docker start <nombre del contenedor | identificador del contenedor>
```

### Crear y ejecutar un contenedor con nombre asignado

```
docker run --name <nombre del contenedor> <nombre de la imagen>
```

### Detener un contenedor
```
docker stop <nombre del contenedor | identificador del contenedor>
```

### Eliminar una imagen

```
docker rmi <nombre de la imagen | identificador>
docker image rm <nombre de la imagen | identificador>
docker rmi <nombre de la imagen | identificador> <nombre de la imagen | identificador> <nombre de la imagen | identificador>
docker image rm <nombre de la imagen | identificador> <nombre de la imagen | identificador> <nombre de la imagen | identificador>
```

### Eliminar una imagen asociada a un contenedor

```
docker image rm -f <nombre de la imagen>
```

### Eliminar imágenes huérfanas

```
docker images -f dangling=true | xargs docker rmi
```      
