# [Backstage - DevHUB]

1. Fill env variables in .github/workflows/cloud-run.yaml

2. Create service account in Google Cloud and insert JSON in Github Repository as a secret with GCP_SA_KEY name

## Pre-requirements

1. Create Github Personal Access Token and insert as a secret GH_PAT_TOKEN in repository

2. Remember your Github token need to have some permissions:

  - Contents: Read-only
  - Members: Read-only
  - Administration: Read & write (for creating repositories)
  - Contents: Read & write
  - Metadata: Read-only
  - Pull requests: Read & write
  - Issues: Read & write
  - Workflows: Read & write (if templates include GitHub workflows)
  - Commit statuses: Read-only
  - Variables: Read & write (if templates include GitHub Action Repository Variables)
  - Secrets: Read & write (if templates include GitHub Action Repository Secrets)
  - Environments: Read & write (if templates include GitHub Environments)

3. Install NVM to be able to install Node JS in the version specified for Backstage.

> <https://github.com/nvm-sh/nvm#install--update-script>

4. Install YARN, the Node JS package manager.

> <https://classic.yarnpkg.com/en/docs/install#mac-stable>

5. Install Docker

> <https://docs.docker.com/engine/install/>

## Locally

Export github token to env variable

```sh
export GH_PAT_TOKEN=<your token>
```

To start the app, run:

```sh
nvm install 16
nvm use

yarn install
yarn dev

# open browser in http://localhost:3000
```
