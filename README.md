[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# VCNKit

# Documentation

This is a monorepo consisting of various components and utilities, individual packages can be found in the `packages/*` folder. Each package has their own [Storybook](https://github.com/storybooks/storybook) stories and documentation.

# Installation
In order to use specific packages in this repository, install it through Yarn or NPM with the following command:

NPM
```sh
$ npm install @vcnkit/<package-name>
```

Yarn
```sh
$ yarn add @vcnkit/<package-name>
```

More information can be found in the package's subdirectory: `packages/<package-name>/README.md`

### Storybook

## Requirements

* [Node](https://nodejs.org/) 8 or higher.
* [Yarn](https://yarnpkg.com/)
* [Lerna](https://github.com/lerna/lerna)

## Launching Storybook

Simply `yarn install` and `yarn start` to build the packages and launch [Storybook](https://github.com/storybooks/storybook).