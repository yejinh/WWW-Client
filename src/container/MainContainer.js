import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { fetchProjects, fetchMembers, isLoading } from '../actions';

const dispatchfetchProjects = dispatch => async userId => {
  dispatch(isLoading(true));

  const userData = JSON.parse(localStorage.getItem('WWW'));

  const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userData.token}`
    }
  });

  const json = await res.json();

  dispatch(fetchProjects(json.projects));
  dispatch(fetchMembers(json.members));
  dispatch(isLoading(false));
};

const mapStateToProps = state => ({
  isLoading: state.projectsData.isLoading,
  userId: state.userData.user._id,
  projects: state.projectsData.projects,
  members: state.projectsData.members
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: dispatchfetchProjects(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
