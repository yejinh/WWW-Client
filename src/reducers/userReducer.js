import { LOGIN, LOGOUT, FETCH_USER_DATA } from '../constants/actionType';

const token = JSON.parse(localStorage.getItem('WWW'));
const initialState = {
  user: {},
  isLoggedIn: token ? true : false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      localStorage.setItem('WWW', JSON.stringify({
        token: action.token,
        email: action.email
      }));

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
          profilePhoto: action.profilePhoto
        }
      };

    case LOGOUT:
      return {
        user: {},
        isLoggedIn: false
      };

    default:
      return state;
  }
};

export default userReducer;
