'use strict';
const configNext = require('./lib/configs/next');
const configBase = require('./lib/configs/base');
const configReact = require('./lib/configs/react');
const configStorybook = require('./lib/configs/storybook');
const configTailwind = require('./lib/configs/tailwind');
const configPlaywright = require('./lib/configs/playwright');

module.exports = {
  configs: {
    next: configNext,
    react: configReact,
    base: configBase,
    storybook: configStorybook,
    tailwind: configTailwind,
    playwright: configPlaywright,
  },
};