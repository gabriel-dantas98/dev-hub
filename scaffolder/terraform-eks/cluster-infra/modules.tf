module "network" {
  source = "./network"

  cluster_name = var.cluster_name
  region = var.region
}

module "master" {
  source = "./master"

  cluster_name = var.cluster_name
  kubernetes_version = var.kubernetes_version

  private_subnet_1a = module.network.private_subnet_1a
  private_subnet_1b = module.network.private_subnet_1b
}

module "node" {
  source = "./node"

  cluster_name = module.master.cluster_name

  private_subnet_1a = module.network.private_subnet_1a
  private_subnet_1b = module.network.private_subnet_1b

  desired_size = var.desired_size
  min_size = var.min_size
  max_size = var.max_size

}
