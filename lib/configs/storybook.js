'use strict';

module.exports = {
  overrides: [
    {
      files: ['*.stories.*'],
      extends: [
        "plugin:storybook/recommended",
      ],
      plugins: [
        'storybook',
      ],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
      }
    }
  ]
};
