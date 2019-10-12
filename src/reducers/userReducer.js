import { IS_LOGGED_IN, SET_USER_INFO, LOGOUT } from '../constants/actionType';

const initialState = {
  user: {},
  isLoggedIn: true
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.data
      };

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      };

      case LOGOUT:
        return {
          user: {},
          auth: false,
          errMessage: null
        };

    default:
      return state;
  }
};

export default userReducer;
