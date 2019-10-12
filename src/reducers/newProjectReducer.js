import { ADD_MEMBER } from '../constants/actionType';
const initialState = {
  user: null,
  projectMembers: []
};

const newProjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MEMBER:
      return {
        user: action.userData
      };

    default:
      return state;
  }
};

export default newProjectReducer;
