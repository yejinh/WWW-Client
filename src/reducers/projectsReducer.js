import {
  FETCH_MEMBERS,
  FETCH_PROJECTS
} from '../constants/actionType';


const initialState = {
  projects: [],
  members: []
};

const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.projects
      };

    case FETCH_MEMBERS: {
      return {
        ...state,
        members: action.members
      };
    }

    default:
      return state;
  }
};

export default projectsReducer;
