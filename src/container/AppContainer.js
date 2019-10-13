// import firebase from 'firebase'; // 배포용?
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config/firebase';
import App from '../components/App/App';
import { login } from '../actions';

const dispatchAuthenticate = dispatch => async() => {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const { user } = result;
    const { email } = user;
    const name = user.displayName;

    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/auth/authenticate`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, name })
    });

    const json = await res.json();
    const { access_token } = json;

    dispatch(login(access_token, email, name));
  } catch(err) {
    console.error(err);
  }
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  authenticate: dispatchAuthenticate(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
