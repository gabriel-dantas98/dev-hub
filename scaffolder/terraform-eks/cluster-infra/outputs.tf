output "cluster_name" {
  value = module.master.cluster_name
}

output "endpoint" {
  value = module.master.endpoint
}

output "kubeconfig-certificate-authority-data" {
  value = module.master.kubeconfig-certificate-authority-data
}
