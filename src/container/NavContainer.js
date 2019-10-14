import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav';
import { logout } from '../actions';

const dispatchLogout = dispatch => async() => {
  try {
    await logout();
    dispatch(logout());
  } catch(err) {
    console.error(err);
  }
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onLogoutClick: dispatchLogout(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
