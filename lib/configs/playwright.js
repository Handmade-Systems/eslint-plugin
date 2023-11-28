'use strict';

module.exports = {
    overrides: [
        {
            files: ['*.test.*', '*.spec.*'], // Adjust the pattern to match your test files
            extends: [
                "plugin:playwright/recommended"
            ],
            plugins: [
                'playwright',
            ]
        }
    ]
};
