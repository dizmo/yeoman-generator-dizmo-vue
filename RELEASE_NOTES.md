# RELEASE NOTES

## v2.y.z

### MAJOR CHANGES

* Support for `webpack.config.js` Vue.js:

    The Vue.js project generator produces now a skeleton with support for [webpack]. Further, the `babel.config.js` configuration is not required anymore.

### NOTABLE CHANGES

* Support for `sass-loader`:

    It is possible now to import SASS styles into scripts via the `sass-loader` (using `node-sass`), while CSS styles are still supported (via the `css-loader`).

## v1.y.z

### MAJOR CHANGES

* The [@dizmo/generator-dizmo-vue] package is a separated sub-generator, meant to be used in composition with the main [@dizmo/generator-dizmo] package.

### NOTABLE CHANGES

* Integrated generator tests with CI:

    The Vue.js project generator is can now automatically be verified with `npm test`, which is also run by the https://travis-ci.org/ continuous integration service. The entire list of generated files is checked, plus the full content of `package.json`.

[@dizmo/generator-dizmo]: https://github.com/dizmo/yeoman-generator-dizmo
[@dizmo/generator-dizmo-vue]: https://git.dizmo.com/dizmo/yeoman-generator-dizmo-vue
[webpack]: https://webpack.js.org/
