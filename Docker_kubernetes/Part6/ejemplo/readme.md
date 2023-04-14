# Registry

### Para levantar un repositorio de imágenes

```
docker run -d -p 5000:5000 --restart always --name registry registry:2
```

### Para comprobar que las imágenes están en el repositorio anterior

```
http://localhost:5000/v2/_catalog
```
