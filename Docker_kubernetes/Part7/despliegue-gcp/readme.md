# Despliegue en Google Cloud

### Obtener cuenta para Google Cloud

- [Google Cloud](https://cloud.google.com)

### Crear un proyecto

- Crear el proyecto desde la consola de Google Clouds

### Descargar e instalar GCloud

- [Descargar GCloud](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe?hl=Es)

### Autenticarse con Google Cloud

```
gcloud auth login
```

### Conectar con proyecto

```
gcloud config set project docker-group05
gcloud auth configure-docker
```

### Habilitar el control de acceso inicial

```
gcloud projects get-iam-policy docker-group05
```

### Estructura del nombre de las imágenes

- [hostname]/[id proyecto]/[nombre del repositorio]
- gcr.io/docker-group05/frontend
