import * as actionType from '../constants/actionType';

export const isLoggedIn = data => ({
  type: actionType.IS_LOGGED_IN,
  data
});

export const setUserInfo = userInfo => ({
  type: actionType.SET_USER_INFO,
  userInfo
});

export const addMember = userData => ({
  type: actionType.ADD_MEMBER,
  userData
})

export const logout = () => ({
  type: actionType.LOGOUT
});
