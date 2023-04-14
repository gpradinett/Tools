# Certificados

# Para generar un certificado

```
openssl genrsa -out hidalgo.key 2048
```

# Para generar la solicitud

```
openssl req -new -key hidalgo.key -out hidalgo.csr -subj "/CN=hidalgo/O=dev"
```

# Para generar un certificado validado por Kubernetes

```
openssl x509 -req -in hidalgo.csr -CA \\wsl$\docker-desktop-data\version-pack-data\community\kubeadm\pki\ca.crt -CAkey \\wsl$\docker-desktop-data\version-pack-data\community\kubeadm\pki\ca.key -CAcreateserial -out hidalgo.crt -days 500
```

# Para crear un usuario en Kubernetes

```
kubectl config set-credentials hidalgo --client-certificate=C:/Users/HP/.kube/hidalgo.crt --client-key=C:/Users/HP/.kube/hidalgo.key
```

# Para crear el contexto en Kubernetes asociado a un usuario

```
kubectl config set-context hidalgo --cluster=docker-desktop --user=hidalgo
```

# Para listar los verbos

[Verbs Kubernetes](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#determine-the-request-verb)
