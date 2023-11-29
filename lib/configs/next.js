'use strict';

module.exports = {
    extends: [
        'plugin:@next/next/recommended',
        'plugin:@next/next/core-web-vitals'
    ],
    plugins: [
        '@next/next'
    ],
    env: {
        node: true
    },
    rules: {
        '@next/next/no-img-element': 'off'
    },
};

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, 'languageOptions', {enumerable: false});