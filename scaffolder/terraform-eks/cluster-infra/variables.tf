variable "cluster_name" {}

variable "region" {
  default = "us-east-1"
}

variable "kubernetes_version" {
  default = "1.27"
}

variable "desired_size" {
  default = "3"
}

variable "min_size" {
  default = "3"
}

variable "max_size" {
  default = "5"
}
