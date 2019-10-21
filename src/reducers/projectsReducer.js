import {
  FETCH_PROJECTS,
  FETCH_PROJECT,
  FETCH_MEMBERS
} from '../constants/actionType';


const initialState = {
  projects: [],
  project: {},
  members: []
};

const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.projects
      };

    case FETCH_PROJECT:
      return {
        ...state,
        project: action.project
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
