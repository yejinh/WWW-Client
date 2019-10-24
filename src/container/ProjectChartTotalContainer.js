import { connect } from 'react-redux';
import ProjectChartTotal from '../components/ProjectChartTotal/ProjectChartTotal';

const mapStateToProps = state => ({
  createdAt: state.projectsData.project.created_at,
  endDate: state.projectsData.project.end_date,
  title: state.projectsData.project.title,
  members: state.projectsData.project.members
});

export default connect(
  mapStateToProps,
  null
)(ProjectChartTotal);
