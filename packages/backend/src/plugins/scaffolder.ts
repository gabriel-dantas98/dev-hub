import { Router } from 'express';
import { CatalogClient } from '@backstage/catalog-client';
import {
  createBuiltinActions,
  createRouter,
} from '@backstage/plugin-scaffolder-backend';
import { ScmIntegrations } from '@backstage/integration';

import type { PluginEnvironment } from '../types';
import { createTerraformPlanAction } from './scaffolder/actions/terraform';
import { createHelmCLIAction } from './scaffolder/actions/helm';
import { createAWSCliAction } from './scaffolder/actions/aws-cli';
import { createKubectlCLIAction } from './scaffolder/actions/kubectl';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({
    discoveryApi: env.discovery,
  });
  const integrations = ScmIntegrations.fromConfig(env.config);

  const builtInActions = createBuiltinActions({
    integrations,
    catalogClient,
    config: env.config,
    reader: env.reader,
  });

  const actions = [
    ...builtInActions,
    createTerraformPlanAction(),
    createHelmCLIAction(),
    createAWSCliAction(),
    createKubectlCLIAction(),
  ];

  return await createRouter({
    actions,
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient,
    identity: env.identity,
    permissions: env.permissions,
  });
}
