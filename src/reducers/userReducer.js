import {
  LOGIN,
  LOGOUT,
  FETCH_USER_DATA,
  FETCH_PROJECTS
} from '../constants/actionType';

const token = JSON.parse(localStorage.getItem('WWW'));
const initialState = {
  user: {},
  projects: [],
  isLoggedIn: token ? true : false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      localStorage.setItem('WWW', JSON.stringify({ token: action.token }));

      return {
        ...state,
        isLoggedIn: true
      };

    case FETCH_USER_DATA:
      return {
        ...state,
        user: {
          email: action.email,
          name: action.name,
          profilePhoto: action.profilePhoto,
          id: action.userId
        }
      };

    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.projects
      };

    case LOGOUT:
      localStorage.removeItem('WWW');

      return {
        user: {},
        projects: [],
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default userReducer;
