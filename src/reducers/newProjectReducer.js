import { FIND_MEMBER, ADD_MEMBER } from '../constants/actionType';
import _ from 'lodash';

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
      if (_.every(state.projectMembers.map(member => member._id !== state.foundUser._id))) {

        return {
          projectMembers: [...state.projectMembers, state.foundUser],
          foundUser: null
        };
      }

      return {
        projectMembers: [...state.projectMembers],
        foundUser: null
      };

    default:
      return state;
  }
};

export default newProjectReducer;
