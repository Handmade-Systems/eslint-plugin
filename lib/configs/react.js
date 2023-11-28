'use strict';

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:testing-library/react',
    ],
    plugins: [
        'react',
        'testing-library',
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        // react
        "react/prop-types": "off",
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.ts', '.jsx', '.tsx']}],
        'react/no-unescaped-entities': 'off',
        // testing
        'testing-library/await-async-utils': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
};

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, 'languageOptions', { enumerable: false });