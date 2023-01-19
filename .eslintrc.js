module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import', 'tailwindcss'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:tailwindcss/recommended'],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
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
