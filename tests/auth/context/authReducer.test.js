import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

describe('tests on authReducer', () => {
  const defaultState = { logged: false };

  test('should return reducer default state', () => {
    const newState = authReducer(defaultState, {});

    expect(newState).toEqual(defaultState);
  });

  test('should set user & set logged to true when action is login', () => {
    const user = { id: 'abc', name: 'testing' };

    const action = {
      type: types.login,
      payload: user,
    };

    const newState = authReducer(defaultState, action);

    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('should remove user & set logged to false when action is logout', () => {
    const loggedState = {
      logged: true,
      user: { id: 'abc', name: 'testing' },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(loggedState, action);

    expect(newState).toEqual(defaultState);
  });
});
