module.exports = {
  extends: ['../../.eslintrc.base.js'],
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
