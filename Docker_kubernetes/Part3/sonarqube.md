# Sonarqube

### Para instalarlo

```
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube:community
```

### Para analizar el código con el executable descargado de sonar-scanner

```
sonar-scanner.bat -D"sonar.projectKey=example" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=c3128c42401c9e6df2fb5d1c96e72af48e884508"
```

### Para ejecutar el sonar-scanner desde un contenedor

```
docker run --rm -e SONAR_HOST_URL="http://sonarqube:9000" -e SONAR_LOGIN="c3128c42401c9e6df2fb5d1c96e72af48e884508"  -v "${PWD}:/usr/src" --network net-sonarqube sonarsource/sonar-scanner-cli -D"sonar.projectKey=example"
```
