# Redes

### Listar

```
docker network ls
```

### Crear una red

```
docker network create -d bridge net-mysql
```

### Para inspeccionar una red

```
docker network inspect net-mysql
```

### Conectar un contenedor a una red existente

```
docker network connect net-postgres postgres-server
```

### Desconectar un contenedor de una red existente

```
docker network disconnect net-postgres postgres-server
```

### Para crear un red con subnet y gateway

```
docker network create -d bridge --subnet 172.140.10.0/24 --gateway 172.140.10.20
```

### Para crear un contenedor con un ip

```
docker run -d --name serverweb05 --ip 172.140.10.15 --network net-custom nginx
```

### Para eliminar una red (no debe tener contenedores asociados)

```
docker network rm <nombre de la red>
```
