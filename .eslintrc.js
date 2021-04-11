const path = require('path');

module.exports = {
  extends: [require.resolve('eslint-config-airbnb-typescript')],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
  },
  rules: {
    'import/no-default-export': 2,
    'import/prefer-default-export': 0
  }
};
