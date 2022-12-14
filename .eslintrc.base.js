module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
  overrides: [
    // Configs for Jest.
    {
      plugins: ['jest'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/all'],
    },
  ],
};
