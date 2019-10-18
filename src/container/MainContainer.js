import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { fetchProjects } from '../actions';

const dispatchfetchProjects = dispatch => async(userId) => {
  const userData = JSON.parse(localStorage.getItem('WWW'));

  const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userData.token}`
    }
  });
  console.log(res);

  const json = await res.json();
  dispatch(fetchProjects(json.projects));
};

const mapStateToProps = state => ({
  userId: state.userData.user.id,
  projects: state.userData.projects,
  userName: state.userData.user.name,
  profilePhoto: state.userData.user.profilePhoto
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: dispatchfetchProjects(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
