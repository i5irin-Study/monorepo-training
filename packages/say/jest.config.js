const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    '^@i5irin-monorepo-training/(.*)$': '<rootDir>/../$1/src',
  },
};
