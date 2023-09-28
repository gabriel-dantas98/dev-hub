import {
  createTemplateAction,
  executeShellCommand,
} from '@backstage/plugin-scaffolder-node';

export const createGetKubeConfigAction = () => {
  return createTemplateAction<{
    args: string[];
    cluster: string;
  }>({
    id: 'get:kubeconfig',
    schema: {
      input: {
        type: 'object',
        required: ['cluster', 'args'],
        properties: {
          cluster: {
            type: 'string',
            title: 'Cluster name',
            description: 'The cluster name to get credentials',
          },
          args: {
            type: 'array',
            items: {
              type: 'string',
            },
            title: 'Arguments to pass to the command',
          },
        },
      },
      output: {
        type: 'object',
        properties: {
          kubeConfig: {
            type: 'object',
            title: 'kubeconfig Output',
          },
        },
      },
    },

    async handler(ctx) {
      const args = ctx.input.args;
      const cluster = ctx.input.cluster;

      ctx.logger.info('executing: get kube config', args);

      // aws eks update-kubeconfig --region us-east-1 --name devhub-cluster

      await executeShellCommand({
        command: 'aws',
        args: [
          'eks',
          'update-kubeconfig',
          '--region',
          'us-east-1',
          '--name',
          cluster,
        ],
        logStream: ctx.logStream,
        options: {
          cwd: `${ctx.workspacePath}`,
        },
      });

      
    },
  });
};
