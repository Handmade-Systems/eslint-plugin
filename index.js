'use strict';
const configNext = require('./lib/configs/next');
const configBase = require('./lib/configs/base');
const configReact = require('./lib/configs/react');

module.exports = {
    // rules: allRules,
    configs: {
        next: configNext,
        react: configReact,
        base: configBase,
    },
};