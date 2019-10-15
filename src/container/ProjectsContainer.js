import { connect } from 'react-redux';
import Projects from '../components/Projects/Projects';

const dispatchLogout = dispatch => async() => {
  try {

  } catch(err) {
    console.error(err);
  }
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
)(Projects);
