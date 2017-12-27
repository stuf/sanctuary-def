'use strict';

const config = JSON.parse(JSON.stringify(require('./.eslintrc.json')));
config.extends = ['./node_modules/sanctuary-style/eslint-es6.json'];
config.plugins = ['markdown'];
config.rules['max-len'] = ['off'];
config.rules['no-undef'] = ['off'];
config.rules['no-unused-vars'] = ['off'];
config.rules['strict'] = ['off'];
module.exports = config;
