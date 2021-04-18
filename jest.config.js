module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup/testingLibrary.ts'],
  timers: 'fake',
  testTimeout: 5000,
  clearMocks: true,
  testMatch: ['**/*.test.ts{,x}'],
  transform: {'\\.tsx?$': 'ts-jest'},
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  modulePathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^__tests__(.*)$': '<rootDir>/src/__tests__/$1',
    '^api(.*)$': '<rootDir>/src/api/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
    '^theme(.*)$': '<rootDir>/src/theme/$1',
    '^tools(.*)$': '<rootDir>/src/tools/$1',
    '^types(.*)$': '<rootDir>/src/types/$1',
    '^routing(.*)$': '<rootDir>/src/routing/$1',
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^templates(.*)$': '<roodDir>/src/templates/$1',
  },
  collectCoverageFrom: [
    "src/**/*.ts{,x}",
  ],
};
