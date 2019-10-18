import {
  INIT_MEMBER,
  FIND_MEMBER,
  ADD_MEMBER,
  REMOVE_MEMBER,
  CREATE_NEW_PROJECT,
  FETCH_PROJECTS
} from '../constants/actionType';
import _ from 'lodash';

const initialState = {
  foundUser: null,
  projectMembers: [],
  isCreated: false
};

const newProjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_MEMBER:
      return {
        ...state,
        projectMembers: [ action.loggedInUser ]
      }

    case FIND_MEMBER:
      return {
        ...state,
        foundUser: action.foundUserData
      };

    case ADD_MEMBER:
      if (_.every(state.projectMembers.map(member => member._id !== state.foundUser._id))) {

        return {
          ...state,
          projectMembers: [ ...state.projectMembers, state.foundUser ],
          foundUser: null
        };
      }

      return {
        ...state,
        projectMembers: [ ...state.projectMembers ],
        foundUser: null
      };

    case REMOVE_MEMBER:
      return {
        ...state,
        projectMembers: state.projectMembers.filter(member => member._id !== action.user._id)
      };

    case CREATE_NEW_PROJECT:
      return {
        projectMembers: [],
        foundUser: null,
        isCreated: true
      };

    case FETCH_PROJECTS:
      return {
        ...state,
        isCreated: false
      };

    default:
      return state;
  }
};

export default newProjectReducer;
