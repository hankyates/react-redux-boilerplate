#!/usr/bin/env node
// TODO this should read settings from .babelrc
require('babel-core/register')({
    presets: ['es2015', 'react']
});
require('../server/index');
