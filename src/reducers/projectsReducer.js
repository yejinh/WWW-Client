import {
  IS_LOADING,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  FETCH_MEMBERS,
  DELETE_PROJECT
} from '../constants/actionType';

const initialState = {
  isLoading: true,
  isDeleted: false,
  projects: [],
  project: {},
  members: []
};

const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.data,
        isDeleted: false
      };

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

    case FETCH_MEMBERS:
      return {
        ...state,
        members: action.members
      };

    case DELETE_PROJECT: {
      return {
        ...state,
        isDeleted: true
      };
    }

    default:
      return state;
  }
};

export default projectsReducer;
