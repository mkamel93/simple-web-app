- This is a simple NodeJs web app with get request to return name of your favourite tree

- The app is deployed as a container based on Node 16 base image

- you can set your favourite tree name as env var in the webapp-k8s.yaml file under env section for **TREE** variable with any value you want

- In order to start the application please follow the following steps:
1. Install minikube locally with ingress addson with kubernetes version 1.19+ for ingress API to work
2. Make sure that kubectl is installed 
3. run the build_and_deploy.sh script with a user that has sudo permissions but not root user as following
 ./build_and_deploy.sh
