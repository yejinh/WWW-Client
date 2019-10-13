import { FIND_MEMBER, ADD_MEMBER } from '../constants/actionType';
const initialState = {
  user: null,
  projectMembers: []
};

const newProjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case FIND_MEMBER:
      return {
        ...state,
        user: action.userData
      };

    case ADD_MEMBER:
      return {
        projectMembers: [...state.projectMembers, state.user],
        user: null
      };

    default:
      return state;
  }
};

export default newProjectReducer;
