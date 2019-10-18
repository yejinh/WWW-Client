import * as actionType from '../constants/actionType';

export const login = token => ({
  type: actionType.LOGIN,
  token
});

export const fetchUserData = userData => ({
  type: actionType.FETCH_USER_DATA,
  email: userData.email,
  name: userData.name,
  profilePhoto: `${userData.profilePhoto}?height=200&width=200`,
  userId: userData._id
});

export const fetchProjects = projects => ({
  type: actionType.FETCH_PROJECTS,
  projects
});

export const initMember = loggedInUser => ({
  type: actionType.INIT_MEMBER,
  loggedInUser
});

export const findMember = foundUserData => ({
  type: actionType.FIND_MEMBER,
  foundUserData
});

export const addMember = () => ({
  type: actionType.ADD_MEMBER,
});

export const removeMember = user => ({
  type: actionType.REMOVE_MEMBER,
  user
});

export const createNewProject = () => ({
  type: actionType.CREATE_NEW_PROJECT
});

export const logout = () => ({
  type: actionType.LOGOUT
});
