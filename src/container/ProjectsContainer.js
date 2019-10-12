import { connect } from 'react-redux';
import Projects from '../components/Projects/Projects';

const dispatchLogout = dispatch => async() => {
  try {

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
)(Projects);
