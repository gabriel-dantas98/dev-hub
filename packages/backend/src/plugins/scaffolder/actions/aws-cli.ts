import {
  createTemplateAction,
  executeShellCommand,
} from '@backstage/plugin-scaffolder-node';

export const createAWSCliAction = () => {
  return createTemplateAction<{
    args: string[];
    command: string[];
    path: string;
  }>({
    id: 'aws:cli',
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
    },

    async handler(ctx) {
      const args = ctx.input.args;
      ctx.logger.info('executing: aws', args);

      await executeShellCommand({
        command: 'aws',
        args: [...args],
        logStream: ctx.logStream,
        options: {
          cwd: `${ctx.workspacePath}`,
        },
      });
    },
  });
};
