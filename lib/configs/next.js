'use strict';

module.exports = {
    extends: [
        'next',
        'next/core-web-vitals',
    ],
    plugins: [
        'next'
    ]
};

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, 'languageOptions', { enumerable: false });