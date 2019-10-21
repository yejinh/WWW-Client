import { connect } from 'react-redux';
import Project from '../components/Project/Project';
import { fetchProject } from '../actions';

const userData = JSON.parse(localStorage.getItem('WWW'));

const dispatchfetchProject = dispatch => async projectId => {
  const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/project/${projectId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${userData.token}` }
  });

  const json = await res.json();
  dispatch(fetchProject(json.project));
};

const mapStateToProps = state => ({
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
