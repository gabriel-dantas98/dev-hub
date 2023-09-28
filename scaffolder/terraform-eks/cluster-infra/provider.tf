provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket         = "devhub-terraform-backend"
    key            = "clusters/eks/dev-hub-cluster/terraform.tfstate"
    region         = "us-east-1"
    }
}
