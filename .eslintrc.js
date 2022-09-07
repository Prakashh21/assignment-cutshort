module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],

  rules: {
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },

  env: {
    browser: true,
    es2021: true,
  },

};
