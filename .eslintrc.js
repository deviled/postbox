const path = require('path');

module.exports = {
  extends: [require.resolve('eslint-config-airbnb-typescript')],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-associated-control': 0,
    '@typescript-eslint/naming-convention': 0,
  }
};
