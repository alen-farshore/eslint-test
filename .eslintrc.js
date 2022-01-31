module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prefer-arrow-functions'],
  rules: {
    'comma-dangle': 'off',
    'arrow-body-style': ['error', 'always'],
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        returnStyle: 'explicit',
      },
    ],
  },
};
