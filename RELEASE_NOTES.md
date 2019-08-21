# RELEASE NOTES

## v1.y.z

### MAJOR CHANGES

* The [@dizmo/generator-dizmo-vue] package is a separated sub-generator, meant to be used in composition with the main [@dizmo/generator-dizmo] package.

[@dizmo/generator-dizmo]: https://github.com/dizmo/yeoman-generator-dizmo
[@dizmo/generator-dizmo-vue]: https://git.dizmo.com/dizmo/yeoman-generator-dizmo-vue

### NOTABLE CHANGES

* Integrated generator tests with CI:

    The React project generator is can now automatically be verified with `npm test`, which is also run by the https://travis-ci.org/ continuous integration service. The entire list of generated files is checked, plus the full content of `package.json`.