import { connect } from 'react-redux';
import NewProject from '../components/NewProject/NewProject';
import { findMember, addMember } from '../actions';

const token = JSON.parse(localStorage.getItem('WWW')).token;

const dispatchSubmitClick = dispatch => async(title, projectMembers) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, projectMembers })
    });
  } catch(err) {
    console.error(err);
  }
};

const dispatchMemberFind = dispatch => async(email) => {
  try {
    console.log(email)
    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/users/${email}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
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
  projectMembers: state.newProject.projectMembers,
  user: state.newProject.user
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
