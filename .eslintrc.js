module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import-helpers'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { 'endOfLine':'auto' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true
        }
      }
    ],
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { 'argsIgonePattern': 'next' }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@/',
          '/^~/',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prettier/prettier': 'error',
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  }
};
