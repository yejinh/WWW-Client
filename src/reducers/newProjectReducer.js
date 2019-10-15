import {
  FIND_MEMBER,
  ADD_MEMBER,
  CREATE_NEW_PROJECT
} from '../constants/actionType';
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

    case CREATE_NEW_PROJECT:
      return {
        projectMembers: [],
        foundUser: null
      };

    default:
      return state;
  }
};

export default newProjectReducer;
