module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: ['./lint/eslintBase.js', './lint/eslintReact.js', './lint/eslintTypeScript.js'],
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
