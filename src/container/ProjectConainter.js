import { connect } from 'react-redux';
import Project from '../components/Project/Project';
import { fetchProject, isLoading, deleteProject } from '../actions';


const dispatchfetchProject = dispatch => async projectId => {
  try {
    const userData = await JSON.parse(localStorage.getItem('WWW'));

    dispatch(isLoading(true));

    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/project/${projectId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${userData.token}` }
    });

    const json = await res.json();
    await dispatch(fetchProject(json.project));
    dispatch(isLoading(false));
  } catch(err) {
    console.log(err);
  }
};

const dispatchDeleteProject = dispatch => async projectId => {
  try {
    const userData = await JSON.parse(localStorage.getItem('WWW'));

    dispatch(isLoading(true));

    await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/${projectId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${userData.token}` }
    });

    dispatch(isLoading(false));
    dispatch(deleteProject());
  } catch(err) {
    console.log(err);
  }
};

const mapStateToProps = state => ({
  isLoading: state.projectsData.isLoading,
  isDeleted: state.projectsData.isDeleted,
  members: state.projectsData.project.members
});

const mapDispatchToProps = dispatch => ({
  fetchProject: dispatchfetchProject(dispatch),
  deleteProject: dispatchDeleteProject(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
