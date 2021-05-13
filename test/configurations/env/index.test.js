const env = require('../../../src/configurations/env');

describe('env-tests', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    test('should return environments variables', () => {
        expect(env).not.toBeNull();
        expect(env).not.toBeUndefined();
        expect(typeof env).toBe('object');
    });
});
