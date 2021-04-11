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
    '^components(.*)$': '<rootDir>/src/components/$1',
  },
  collectCoverageFrom: [
    "src/**/*.ts{,x}",
  ],
};
