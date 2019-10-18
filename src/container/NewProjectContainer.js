import { connect } from 'react-redux';
import NewProject from '../components/NewProject/NewProject';
import {
  initMember,
  findMember,
  addMember,
  removeMember,
  createNewProject
} from '../actions';

const userData = JSON.parse(localStorage.getItem('WWW'));

const dispatchMemberInit = dispatch => loggedInUser => {
  dispatch(initMember(loggedInUser));
};

const dispatchSubmitProject = dispatch => async(title, addedMembers) => {
  try {
    await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token}`
      },
      body: JSON.stringify({ title, addedMembers })
    });

    dispatch(createNewProject());
  } catch(err) {
    console.error(err);
  }
};

const dispatchMemberFind = dispatch => async email => {
  try {
    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/users/${email}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${userData.token}` }
    });

    const json = await res.json();

    dispatch(findMember(json.userData));
  } catch(err) {
    console.error(err);
  }
};

const dispatchMemberAdd = dispatch => () => {
  dispatch(addMember());
};

const dispatchMemberRemove = dispatch => user => {
  dispatch(removeMember(user));
};

const mapStateToProps = state => ({
  loggedInUser: state.userData.user,
  addedMembers: state.newProjectData.addedMembers,
  foundUser: state.newProjectData.foundUser,
  isCreated: state.newProjectData.isCreated
});

const mapDispatchToProps = dispatch => ({
  onInitMember: dispatchMemberInit(dispatch),
  onSubmitClick: dispatchSubmitProject(dispatch),
  onMemberFind: dispatchMemberFind(dispatch),
  onMemberAdd: dispatchMemberAdd(dispatch),
  onMemberRemove: dispatchMemberRemove(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProject);
