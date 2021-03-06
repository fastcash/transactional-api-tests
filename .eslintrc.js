module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }]
  }
}
