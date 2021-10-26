module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: [
    // 'airbnb',
    // 'airbnb-typescript',
    // 'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './lint/eslintBase.js',
    './lint/eslintReact.js'
  ],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0
    // 'no-use-before-define': 0
  },
  // extends: ['./lint/eslintBase.js', './lint/eslintReact.js'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    // NOTE 解决 eslint/typescript 和 @typescript-eslint/parser 之间的冲突 - 注意之后的 eslint 版本将会弃用，
    createDefaultProgram: true
  },
  // 直接添加 .eslintignore
  // ignorePatterns: ["./build"],
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true
  }
}
