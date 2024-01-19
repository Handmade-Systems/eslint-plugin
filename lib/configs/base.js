'use strict';

module.exports = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'eslint:recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    "plugin:prettier/recommended"
  ],
  plugins: [
    '@typescript-eslint',
    'unused-imports',
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
    // Import sorting
    'import/no-unresolved': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
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
    'require-await': 'error',
    'newline-before-return': 'error',
    "max-lines-per-function": ["error", 250],
  },
  overrides: [
    {
      files: ['*.test.*', '*.spec.*'], // Adjust the pattern to match your test files
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