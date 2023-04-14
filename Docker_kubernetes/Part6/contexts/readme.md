# Contexts

### Para ver el contexto actual

```
kubectl config current-context
```

### Para listar todos los contextos

```
kubectl config view
```

### Para crear un contexto

```
kubectl config set-context ctx-test --cluster=docker-desktop --user=docker-desktop
```

### Para cambiar de contexto

```
kubectl config use-context ctx-test
```
