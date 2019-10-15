import { connect } from 'react-redux';
import NewProject from '../components/NewProject/NewProject';
import { findMember, addMember } from '../actions';

const userData = JSON.parse(localStorage.getItem('WWW'));

const dispatchSubmitClick = dispatch => async(title, projectMembers) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.token}`
      },
      body: JSON.stringify({ title, projectMembers })
    });
  } catch(err) {
    console.error(err);
  }
};

const dispatchMemberFind = dispatch => async(email) => {
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

const dispatchMemberAdd = dispatch => async() => {
  try {
    dispatch(addMember());
  } catch(err) {
    console.error(err);
  }
};

const mapStateToProps = state => ({
  userName: state.userData.user.name,
  profilePhoto: state.userData.user.profilePhoto,
  projectMembers: state.newProject.projectMembers,
  foundUser: state.newProject.foundUser
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick: dispatchSubmitClick(dispatch),
  onMemberFind: dispatchMemberFind(dispatch),
  onMemberAdd: dispatchMemberAdd(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProject);
