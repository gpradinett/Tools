#

# Crear un contenedor de Postgres

### Para crearlo

```
docker run -d --name postgres-server -e POSTGRES_PASSWORD=12345 -p 5300:5432 postgres
```

### Para instalar un cliente de MySQL (pgadmin)

```
docker run -d --name pgadmin -p 9200:80 -e PGADMIN_DEFAULT_PASSWORD=12345 -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com dpage/pgadmin4
```
