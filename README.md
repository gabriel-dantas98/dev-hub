# [Backstage - DevHUB]

1. Fill env variables in .github/workflows/cloud-run.yaml

2. Create service account in Google Cloud and insert JSON in Github Repository as a secret with GCP_SA_KEY name

3. Create Github Personal Access Token and insert as a secret GH_PAT_TOKEN in repository

## Locally

Export github token to env variable

```sh
  export GH_PAT_TOKEN=<your token>
```

To start the app, run:

```sh
yarn install
yarn dev
```
