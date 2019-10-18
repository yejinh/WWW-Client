import { connect } from 'react-redux';
import Project from '../components/Project/Project';

const dispatchLogout = dispatch => () => {
};

const mapStateToProps = state => ({
  userName: state.userData.user.name,
  profilePhoto: state.userData.user.profilePhoto
});

const mapDispatchToProps = dispatch => ({
  onLogoutClick: dispatchLogout(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
