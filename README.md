[![NPM version](https://badge.fury.io/js/%40dizmo%2Fgenerator-dizmo-vue.svg)](https://npmjs.org/package/@dizmo/generator-dizmo-vue)
[![Build Status](https://travis-ci.org/dizmo/yeoman-generator-dizmo-vue.svg?branch=master)](https://travis-ci.org/dizmo/yeoman-generator-dizmo-vue)

# @dizmo/generator-dizmo-vue

Sub-generator to create dizmo projects with support for [vue]: This package is meant to be used in composition with the main [@dizmo/generator-dizmo] package.

[vue]: https://vuejs.org/

## Package Installation

```sh
npm install -g yo
```

```sh
npm install -g @dizmo/generator-dizmo-vue
```

**Note:** On most operating systems the `-g` option (shortcut for `--global`) requires super user (administrator) rights. Due to security considerations however, avoid using such a privileged account and see the (external) [FAQ] to be able to install global packages as a *regular* user.

[FAQ]: https://github.com/dizmo/yeoman-generator-dizmo#i-cannot-install-yo-globally-with-npm-install--g

## Project Generation

```sh
yo @dizmo/dizmo-vue [--git]
```

## CLI Help

```sh
yo @dizmo/dizmo-vue --help
```

## Project Upgrade

```sh
npm upgrade -g @dizmo/generator-dizmo-vue
```

Then, within an existing project:

```sh
yo @dizmo/dizmo-vue --upgrade
```

## FAQ

### Is ES6 supported?

While ES6 is fully supported in regular `src/**/*.js` scripts, in Vue components (`src/**/*.vue`) only ES5 can be used. This limitation is due to the [`vueify`](https://github.com/vuejs/vueify) plugin of the `browserify` bundler. However, in the Vue components it is possible to *import* ES6 scripts.

## Further Information

See the description of the main [@dizmo/generator-dizmo] package for a more exhaustive documentation.

[@dizmo/generator-dizmo]: https://www.npmjs.com/package/@dizmo/generator-dizmo
