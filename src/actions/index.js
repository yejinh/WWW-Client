import * as actionType from '../constants/actionType';

export const login = (token, email) => ({
  type: actionType.LOGIN,
  token,
  email
});

export const fetchUserData = userData => ({
  type: actionType.FETCH_USER_DATA,
  email: userData.email,
  name: userData.name,
  profilePhoto: `${userData.profilePhoto}?height=200&width=200`
});

export const findMember = foundUserData => ({
  type: actionType.FIND_MEMBER,
  foundUserData
});

export const addMember = () => ({
  type: actionType.ADD_MEMBER
});

export const logout = () => ({
  type: actionType.LOGOUT
});
