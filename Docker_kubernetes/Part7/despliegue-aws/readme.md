# Despliegue en AWS

### Herramientas a instalar

- Chocolatey (Windows)
- Brew (MAC)
- aws-cli (https://awscli.amazonaws.com/AWSCLIV2.msi)
- eksctl (choco install eksctl -y)
- helm (choco install kubernetes-helm -y)

### Configurar usuario

```
aws configure
```

### Crear cluster

```
eksctl create cluster --name cluster-docker --without-nodegroup --region us-east-2 --zones us-east-2a,us-east-2b
```

### Agregar nodos

```
eksctl create nodegroup --cluster cluster-docker --name cluster-docker-nodegroup  --node-type t3.medium --nodes 1 --nodes-min 1 --nodes-max 3 --asg-access --region us-east-2
```

### Crear IAM Provider

```
eksctl utils associate-iam-oidc-provider --cluster cluster-docker --approve --region us-east-2
```

### Descargar políticas para el cluster

```
curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.1.2/docs/install/iam_policy.json
```

### Crear la política usando un archivo json

```
aws iam create-policy --policy-name AWSLoadBalancerControllerPolicy --policy-document file://iam_policy.json
```

### Crear cuenta ServiceAccount para el cluster

```
eksctl create iamserviceaccount --cluster=cluster-docker --namespace=kube-system --name=aws-load-balancer-controller --attach-policy-arn=arn:aws:iam::282865065290:policy/AWSLoadBalancerControllerPolicy --override-existing-serviceaccounts --approve --region us-east-2
```

### Verificar si existe el ingress controller del balanceador

```
kubectl get deploy -n kube-system alb-ingress-controller
```

### Instalar el target group binding

```
kubectl apply -k "github.com/aws/eks-charts/stable/aws-load-balancer-controller/crds?ref=master"
```

### Agregar los repositorios

```
helm repo add eks https://aws.github.io/eks-charts
```

### Actualizar los repositorios

```
helm repo update
```

### Instalar el ingress controller del balanceador

```
helm upgrade -i aws-load-balancer-controller eks/aws-load-balancer-controller --set clusterName=cluster-docker --set serviceAccount.create=false --set serviceAccount.name=aws-load-balancer-controller -n kube-system
```

### Verificar que ahora exista el ingress controller del balanceador

```
kubectl get deploy -n kube-system aws-load-balancer-controller
```

### Crear las imágenes con los tags

- Ir a ECR y crear los repositorios para cada de las imágenes
- Usar las url de los repositorios como tagnames de cada una de las imágenes
  > _Revisar docker-compose-aws.yaml_

```
docker compose -f docker-compose-aws.yaml build
```

### Vincular la cuenta de AWS con la cuenta local de Docker

```
docker login -u AWS -p $(aws ecr get-login-password --region us-east-2) 282865065290.dkr.ecr.us-east-2.amazonaws.com
```

### Subir las imágenes al ECR

```
docker compose -f docker-compose-aws.yaml push
```

---

### Conectar a cluster usando aws cli

```
aws sts get-caller-identity
aws eks --region us-east-2 update-kubeconfig --name cluster-docker

```
