module.exports = {
  plugins: ['@typescript-eslint', 'import', 'tailwindcss'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:tailwindcss/recommended'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    'no-else-return': 'warn',
    'react/display-name': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['block-like', 'multiline-const', 'multiline-let'], next: '*' },
      { blankLine: 'always', prev: 'import', next: ['export', 'block-like', 'const', 'let', 'function'] },
      { blankLine: 'always', prev: '*', next: ['block-like'] },
    ],
    curly: ['warn', 'multi'],
    'newline-before-return': 'warn',
  },
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@/**',
                group: 'external',
                position: 'after',
              },
            ],
            alphabetize: {
              order: 'asc',
            },
            pathGroupsExcludedImportTypes: ['type'],
            'newlines-between': 'always',
          },
        ],
        'import/no-duplicates': ['warn', { considerQueryString: true }],
        'import/no-unresolved': 'error',
      },
    },
  ],
}
