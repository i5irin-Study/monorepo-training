module.exports = {
  extends: ['./.eslintrc.base.js'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['!.prettierrc.js', 'packages/*'],
};
