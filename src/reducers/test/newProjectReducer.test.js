import newProjectReducer from '../newProjectReducer';
import {
  INIT_MEMBER,
  FIND_MEMBER,
  ADD_MEMBER,
  REMOVE_MEMBER,
  CREATE_NEW_PROJECT,
  FETCH_PROJECTS
} from '../../constants/actionType';

const initialState = {
  foundUser: null,
  addedMembers: [],
  isCreated: false
};

const user = 'yejinh';
const mockAddedMembers = ['1', '2', '3'];
