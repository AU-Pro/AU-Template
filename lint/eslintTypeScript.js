module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    // 'airbnb',
    // 'airbnb-typescript',
    // 'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/no-static-element-interactions': 0
  }
}
