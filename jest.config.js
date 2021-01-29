module.exports = {
    testEnvironment: 'node',
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.js'],
    coveragePathIgnorePatterns: [
      'node_modules',
      'coverage',
      'src/seeders',
      'src/utils/logger.js',
      'src/models',
      'src/database/migrations',
      'src/database/seeders',
      'src/middlewares/joiErrors.js',
      'src/middlewares/asyncHandler.js',
      'src/database/config',
    ],
    verbose: true,
    transform: {
      '^.+\\.js?$': 'babel-jest',
    },
  };