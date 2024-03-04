module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript'
  ]
}
