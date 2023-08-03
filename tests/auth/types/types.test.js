import { types } from '../../../src/auth/types/types';

describe('tests on reducer types', () => {
  test('should return defined types', () => {
    // Useful to prevent sudden changes
    expect(types).toEqual({
      login: '[AUTH] Login',
      logout: '[AUTH] Logout',
    });
  });
});
