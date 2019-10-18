import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import newProjectReducer from './newProjectReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  projectsData: projectsReducer,
  newProjectData: newProjectReducer
});

export default rootReducer;
