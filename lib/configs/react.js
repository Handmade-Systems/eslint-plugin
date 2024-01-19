'use strict';

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: [
    'react',
    'react-refresh',
    'react-hooks'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // react
    "react/prop-types": "off",
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.ts', '.jsx', '.tsx']}],
    'react/no-unescaped-entities': 'off',
    "react-hooks/rules-of-hooks": "error",
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
  overrides: [
    {
      files: ['*.test.*', '*.spec.*'], // Adjust the pattern to match your test files
      extends: [
        'plugin:testing-library/react',
      ],
      plugins: [
        'testing-library',
      ],
      rules: {
        'testing-library/await-async-utils': 'off',
        'no-undef': 'off'
      }
    }
  ]

};

// this is so the `languageOptions` property won't be warned in the new config system
Object.defineProperty(module.exports, 'languageOptions', {enumerable: false});