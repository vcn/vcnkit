const path = require("path");

module.exports = {
    framework: '@storybook/react',
    addons: ['@storybook/addon-essentials'],
    stories: [
        '../packages/essentials/src/.stories/*.jsx',
        '../packages/expansionpanel/src/.stories/*.jsx',
        '../packages/progress/src/.stories/*.jsx',
        '../packages/tabs/src/.stories/*.jsx',
        '../packages/theme/src/.stories/*.jsx',
    ],
    core: {
        builder: 'webpack5',

    },
    babel: async options => {
        console.log(options.overrides);
        return {
            ...options,
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        }
    },
    webpackFinal: async (config, {configType}) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    react: path.resolve('./node_modules/react'),
                    "react-dom": path.resolve('./node_modules/react-dom'),
                    "styled-components": path.resolve('./node_modules/styled-components'),
                    "@vcnkit/essentials": path.resolve('./packages/essentials/src'),
                    "@vcnkit/theme": path.resolve('./packages/theme/src'),
                }
            }
        }
    }
};
