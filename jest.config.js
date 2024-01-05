const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom cofig to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment:  'jsdom',
    testEnvironmentOptions: {
        customExportConditions: []
    },
    transformIgnorePatterns: [
      `/node_modules/(?!(somePkg)|react|uuid)`,
    ],
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    "uuid": require.resolve('uuid'),
  }


    // Typescript
    // preset: 'ts-jest',
}

module.exports = createJestConfig(config);