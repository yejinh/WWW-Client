import { connect } from 'react-redux';
import Project from '../components/Project/Project';
import { fetchProject, isLoading } from '../actions';


const dispatchfetchProject = dispatch => async projectId => {
  const userData = await JSON.parse(localStorage.getItem('WWW'));

  dispatch(isLoading(true));

  const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/project/${projectId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${userData.token}` }
  });

  const json = await res.json();
  await dispatch(fetchProject(json.project));
  dispatch(isLoading(false));
};

const mapStateToProps = state => ({
  isLoading: state.projectsData.isLoading,
  createdAt: state.projectsData.project.created_at,
  endDate: state.projectsData.project.end_date,
  title: state.projectsData.project.title,
  members: state.projectsData.project.members
});

const mapDispatchToProps = dispatch => ({
  fetchProject: dispatchfetchProject(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
