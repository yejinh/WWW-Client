import { LOGIN, LOGOUT } from '../constants/actionType';

const token = JSON.parse(localStorage.getItem('WWW'));
let initialState;

if (!token) {
  initialState = {
    user: {},
    isLoggedIn: false
  }
} else {
  initialState = {
    user: {},
    // SASS...
    isLoggedIn: true
    // isLoggedIn: false
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      localStorage.setItem('WWW', JSON.stringify({ token: action.token }));

      return {
        user: { email: action.email, name: action.name },
        isLoggedIn: true
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
