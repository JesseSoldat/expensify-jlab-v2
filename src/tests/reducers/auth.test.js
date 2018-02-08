import authReducer from '../../reducers/auth';

test('should set uid form login', () => {
  const uid = 'abc123';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toEqual(action.uid);
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: '123'}, action);
  expect(state).toEqual({})
});