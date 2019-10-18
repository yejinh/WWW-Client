import { connect } from 'react-redux';
import Project from '../components/Project/Project';

const userData = JSON.parse(localStorage.getItem('WWW'));

const dispatchfetchProject = dispatch => async projectId => {
  const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/projects/project/${projectId}`, {
    method: 'GET',
    headers: {Authorization: `Bearer ${userData.token}`}
  });

  const json = await res.json();
  console.log(json);
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchProject: dispatchfetchProject(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
