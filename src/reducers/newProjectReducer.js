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
  addedMembers: [],
  isCreated: false
};

const newProjectReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_MEMBER:
      return {
        ...state,
        addedMembers: [ action.loggedInUser ]
      }

    case FIND_MEMBER:
      return {
        ...state,
        foundUser: action.foundUserData
      };

    case ADD_MEMBER:
      if (_.every(state.addedMembers.map(member => member._id !== state.foundUser._id))) {

        return {
          ...state,
          addedMembers: [ ...state.addedMembers, state.foundUser ],
          foundUser: null
        };
      }

      return {
        ...state,
        addedMembers: [ ...state.addedMembers ],
        foundUser: null
      };

    case REMOVE_MEMBER:
      return {
        ...state,
        addedMembers: state.addedMembers.filter(member => member._id !== action.user._id)
      };

    case CREATE_NEW_PROJECT:
      return {
        addedMembers: [],
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
