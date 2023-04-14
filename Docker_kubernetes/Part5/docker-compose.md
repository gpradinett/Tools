# Docker Compose

### Para levantar todos los servicios

```
docker compose up
```

### Para levantar todos los servicios sin vincularse

```
docker compose up -d
```

### Para bajar todos los servicios

```
docker compose down
```

### Para leventar todos los servicios sin vincularse y reconstruir las imágenes

```
docker compose up -d --build
```

### Para reconstruir las imágenes

```
docker compose build
```

### Para ejecutar un único servicio del docker compose

```
docker compose run --rm composer create-project --prefer-dist laravel/laravel .
```

### Para ejecutar algunos servicios del docker compose

```
docker compose up -d --build server php mysql
```
