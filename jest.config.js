const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom cofig to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {

        customExportConditions: []
    }
    


    // Typescript
    // preset: 'ts-jest',
}

module.exports = createJestConfig(config);