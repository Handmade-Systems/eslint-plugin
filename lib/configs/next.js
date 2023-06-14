'use strict';

module.exports = {
    extends: [
        "next/core-web-vitals",
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:testing-library/react',
        "plugin:prettier/recommended"
    ],
    plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        'unused-imports',
        "testing-library",
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'lf',
            }
        ],
        // react
        "react/prop-types": "off",
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.ts', '.jsx', '.tsx']}],
        'react/no-unescaped-entities': 'off',
        // imports
        'simple-import-sort/imports': 'off',
        'import/no-unresolved': 'off',
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/exports': 'error',
        'import/no-default-export': 'off',
        'unused-imports/no-unused-imports-ts': 'error',
        'unused-imports/no-unused-vars-ts': [
            'warn',
            {vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
        ],
        // typescript
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        // testing
        'testing-library/await-async-utils': 'off'
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