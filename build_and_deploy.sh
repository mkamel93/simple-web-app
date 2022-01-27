#!/bin/bash

## add DNS for local.ecosia.org to point to minikube ip
sudo echo '$(minikube ip) local.ecosia.org' >> /etc/hosts

## use local image with minikube
eval $(minikube docker-env)

## build docker image for webapp
docker build -t mkamel/webapp:latest -f Dockerfile .

## Push docker image in case of using actual cluster
docker push mkamel/webapp:latest

## create minikube kubectl alias
##alias kubectl="minikube kubectl --"

## deploy a K8s deployment, svc and ingress for web app
kubectl apply -f webapp-k8s.yaml
