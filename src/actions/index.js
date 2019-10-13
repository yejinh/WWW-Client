import * as actionType from '../constants/actionType';

export const login = (token, email, name) => ({
  type: actionType.LOGIN,
  token,
  email,
  name
});

export const findMember = userData => ({
  type: actionType.FIND_MEMBER,
  userData
});

export const addMember = () => ({
  type: actionType.ADD_MEMBER
});

export const logout = () => ({
  type: actionType.LOGOUT
});
