module.exports = {
  extends: ['./.eslintrc.base.js'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['!.prettierrc.js', 'packages/*'],
  overrides: [
    // For Rollup config file
    {
      files: ['rollup.config.mjs'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['rollup.config.mjs'],
          },
        ],
      },
    },
  ],
};
