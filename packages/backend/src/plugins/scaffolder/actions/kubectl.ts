import {
  createTemplateAction,
  executeShellCommand,
} from '@backstage/plugin-scaffolder-node';

export const createKubectlCLIAction = () => {
  return createTemplateAction<{
    args: string[];
    command: string[];
    path: string;
  }>({
    id: 'kubectl:cli',
    schema: {
      input: {
        type: 'object',
        required: ['path', 'args'],
        properties: {
          path: {
            type: 'string',
            title: 'Path',
            description:
              'The path to the directory containing the Terraform files',
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
          tfOutput: {
            type: 'object',
            title: 'helm Output',
          },
        },
      },
    },

    async handler(ctx) {
      const args = ctx.input.args;
      ctx.logger.info('executing: kubectl', args);

      await executeShellCommand({
        command: 'kubectl',
        args: [...args],
        logStream: ctx.logStream,
        options: {
          cwd: `${ctx.workspacePath}`,
        },
      });
    },
  });
};
