import userReducer from '../userReducer';
import {
  LOGIN,
  LOGOUT,
  FETCH_USER_DATA,
  FETCH_PROJECTS
} from '../../constants/actionType';

const initialState = {
  user: {},
  projects: [],
  isLoggedIn: false
};

const mockUserData = {
  email: 'example@example.com',
  name: 'yejinh',
  profilePhoto: 'https://',
  _id: 12345
};

const mockProjects = ['1', '2', '3'];

describe('userReducer', () => {
  it('should handle initial state', () => {
    expect(
      userReducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle LOGIN', () => {
    expect(
      userReducer(initialState, {
        type: LOGIN,
        isLoggedIn: true
      })
    ).toEqual({
      user: {},
      projects: [],
      isLoggedIn: true
    });
  });

  it('should handle FETCH_USER_DATA', () => {
    expect(
      userReducer(initialState, {
        type: FETCH_USER_DATA,
        email: mockUserData.email,
        name: mockUserData.name,
        profilePhoto: mockUserData.profilePhoto,
        userId: mockUserData._id
      })
    ).toEqual({
      user: mockUserData,
      projects: [],
      isLoggedIn: false
    });
  });

  it('should handle FETCH_PROJECTS', () => {
    expect(
      userReducer(initialState, {
        type: FETCH_PROJECTS,
        projects: mockProjects
      })
    ).toEqual({
      user: {},
      projects: mockProjects,
      isLoggedIn: false
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      userReducer(initialState, {
        type: LOGOUT
      })
    ).toEqual(initialState);
  });
});
