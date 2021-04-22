module.exports = {
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        'react'
    ],
    "rules": {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier/prettier': 'error',
        'prefer-const': 'error',
        'no-debugger': 'error',
    }
};
