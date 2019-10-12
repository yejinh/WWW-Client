import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newProjectReducer from './newProjectReducer';

const rootReducer = combineReducers({
  user: userReducer,
  newProject: newProjectReducer
});

export default rootReducer;
