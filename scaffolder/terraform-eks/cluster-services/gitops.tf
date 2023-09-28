# provider "helm" {
#   debug = true
#   kubernetes {
#     insecure = true
#     host                   = var.cluster_endpoint
#     exec {
#       api_version = "client.authentication.k8s.io/v1beta1"
#       args        = ["eks", "get-token", "--cluster-name", var.cluster_name, "--region", "us-east-1"]
#       command     = "aws"
#     }
#   }
# }

# provider "helm" {
#   debug = true
#   kubernetes {
#     config_context = "arn:aws:eks:us-east-1:216287962757:cluster/dev-hub-cluster"
#     config_path = "~/.kube/config"
#     insecure = true
#   }
# }

# resource "helm_release" "argocd" {
#   name  = "argocd"

#   repository       = "https://argoproj.github.io/argo-helm"
#   chart            = "argo-cd"
#   namespace        = "argocd"
#   version          = "4.9.7"
#   create_namespace = true

#   values = [
#     file("./argo-values.yaml")
#   ]
# }
