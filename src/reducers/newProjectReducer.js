import { FIND_MEMBER, ADD_MEMBER } from '../constants/actionType';
const initialState = {
  foundUser: null,
  projectMembers: []
};

const newProjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIND_MEMBER:
      return {
        ...state,
        foundUser: action.foundUserData
      };

    case ADD_MEMBER:
      return {
        projectMembers: [...state.projectMembers, state.user],
        foundUser: null
      };

    default:
      return state;
  }
};

export default newProjectReducer;
