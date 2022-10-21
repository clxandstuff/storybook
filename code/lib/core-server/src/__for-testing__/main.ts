/// <reference types="node" />
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../../ui/manager/src/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../../lib/components/src/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    './../../addons/docs/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    './../../addons/interactions/**/*.stories.@(ts|tsx|js|jsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    '@storybook/addon-jest',
    '@storybook/addon-a11y',
  ],
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  logLevel: 'debug',
  features: {
    interactionsDebugger: true,
    breakingChangesV7: false,
    storyStoreV7: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
};
module.exports = config;
