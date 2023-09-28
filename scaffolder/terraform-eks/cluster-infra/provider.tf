provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket         = "devhub-terraform-backend"
    key            = "clusters/eks/backstage-terraform/terraform.tfstate"
    region         = "us-east-1"
    }
}
