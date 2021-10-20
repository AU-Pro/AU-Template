module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    './lint/eslintBase.js',
    './lint/eslintReact.js',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  }
}
