import projectsReducer from '../projectsReducer';
import {
  IS_LOADING,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  FETCH_MEMBERS
} from '../../constants/actionType';

const initialState = {
  isLoading: true,
  projects: [],
  project: {},
  members: []
};

const mockProjects = ['1', '2', '3'];
const mockProject = { project: 'mock project' };
const mockMembers = ['4', '5', '6'];

describe('projectsReducer', () => {
  it('should handle initial state', () => {
    expect(
      projectsReducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle IS_LOADING', () => {
    expect(
      projectsReducer(initialState, {
        type: IS_LOADING,
        data: false
      })
    ).toEqual({
      isLoading: false,
      projects: [],
      project: {},
      members: []
    });
  });

  it('should handle FETCH_PROJECTS', () => {
    expect(
      projectsReducer(initialState, {
        type: FETCH_PROJECTS,
        projects: mockProjects
      })
    ).toEqual({
      isLoading: true,
      projects: mockProjects,
      project: {},
      members: []
    });
  });

  it('should handle FETCH_PROJECT', () => {
    expect(
      projectsReducer(initialState, {
        type: FETCH_PROJECT,
        project: mockProject
      })
    ).toEqual({
      isLoading: true,
      projects: [],
      project: mockProject,
      members: []
    });
  });

  it('should handle FETCH_MEMBERS', () => {
    expect(
      projectsReducer(initialState, {
        type: FETCH_MEMBERS,
        members: mockMembers
      })
    ).toEqual({
      isLoading: true,
      projects: [],
      project: {},
      members: mockMembers
    });
  });
});
