module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.js'],
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    testEnvironment: 'node',
};
