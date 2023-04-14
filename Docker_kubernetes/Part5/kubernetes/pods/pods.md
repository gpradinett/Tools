# PODS

### Para listar pods

```
kubectl get pods
kubectl get po
```

### Para acceder al puerto de un pod

```
kubectl port-forward servernginx 7000:80
kubectl port-forward pods/servernginx 7000:80
```

### Para acceder a la información de un pod

```
kubectl get pods servernginx
kubectl get po servernginx -o yaml
kubectl get po servernginx -o json
```

### Para acceder a la información de un pod a través del describe

```
kubectl describe po servernginx
```

### Para ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

### Para eliminar un pod

```
kubectl delete po servernginx
kubectl delete -f 01-pod.yaml
```

### Para acceder a un contenedor único dentro de un pod

```
kubectl exec -it servernginx -- sh
```

### Para acceder a un contenedor dentro de un pod

```
kubectl exec -it server2 -c contenedor2 -- sh
```

### Para acceder al log de un contenedor único dentro de un pod

```
kubectl logs servernginx
```

### Para acceder al log de un contenedor dentro de un pod

```
kubectl logs server2 -c contenedor1
```

### Para listar pods con sus etiquetas

```
kubectl get po --show-labels
```

### Para filtrar pods por etiqueta

```
kubectl get po -l env=dev --show-labels
```
