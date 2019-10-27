import newProjectReducer from '../newProjectReducer';
import {
  INIT_MEMBER,
  FIND_MEMBER,
  ADD_MEMBER,
  REMOVE_MEMBER,
  CREATE_NEW_PROJECT,
  FETCH_PROJECTS
} from '../../constants/actionType';

const userA = { name : 'yejinh', _id: 123 };
const userB = { name: 'vanilla', _id: 456 };

const initialState = {
  foundUser: null,
  addedMembers: [],
  isCreated: false
};

describe('newProjectReducer', () => {
  it('should handle initial state', () => {
    expect(
      newProjectReducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle INIT_MEMBER', () => {
    expect(
      newProjectReducer(initialState, {
        type: INIT_MEMBER,
        loggedInUser: userA
      })
    ).toEqual({
      foundUser: null,
      addedMembers: [ userA ],
      isCreated: false
    });
  });

  it('should handle FIND_MEMBER', () => {
    expect(
      newProjectReducer(initialState, {
        type: FIND_MEMBER,
        foundUserData: userB
      })
    ).toEqual({
      foundUser: userB,
      addedMembers: [],
      isCreated: false
    });
  });

  it('should handle ADD_MEMBER', () => {
    expect(
      newProjectReducer(
        {
          foundUser: userA,
          addedMembers: [],
          isCreated: false
        }, {
          type: ADD_MEMBER
        }
      )
    ).toEqual({
      foundUser: null,
      addedMembers: [ userA ],
      isCreated: false
    });

    expect(
      newProjectReducer(
        {
          foundUser: userA,
          addedMembers: [ userA ],
          isCreated: false
        }, {
          type: ADD_MEMBER
        }
      )
    ).toEqual({
      foundUser: null,
      addedMembers: [ userA ],
      isCreated: false
    });
  });

  it('should handle REMOVE_MEMBER', () => {
    expect(
      newProjectReducer(
        {
          foundUser: null,
          addedMembers: [ userA, userB ],
          isCreated: false
        }, {
          type: REMOVE_MEMBER,
          user: userA
        }
      )
    ).toEqual({
      foundUser: null,
      addedMembers: [ userB ],
      isCreated: false
    });
  });

  it('should handle CREATE_NEW_PROJECT', () => {
    expect(
      newProjectReducer(initialState, {
        type: CREATE_NEW_PROJECT
      })
    ).toEqual({
      foundUser: null,
      addedMembers: [],
      isCreated: true
    });
  });

  it('should handle FETCH_PROJECTS', () => {
    expect(
      newProjectReducer(initialState, {
        type: FETCH_PROJECTS
      })
    ).toEqual(initialState);
  });
});
