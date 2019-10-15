import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav';
import { logout } from '../actions';

const dispatchLogout = dispatch => () => {
  dispatch(logout());
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
)(Nav);
