import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { connect } from 'react-redux';
import firebaseConfig from '../config/firebase';
import Login from '../components/Login/Login';
import { login } from '../actions';

const dispatchAuthenticate = dispatch => async() => {
  try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    const { email, displayName, photoURL } = result.user;
    const profilePhoto = photoURL;
    const userName = displayName.split(' ');
    const name = userName.length > 2 ? `${userName[0]} ${userName[1]}` : displayName;

    const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/auth/authenticate`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, name, profilePhoto })
    });

    const json = await res.json();
    const { access_token } = json;

    dispatch(login(access_token));
  } catch(err) {
    console.error(err);
  }
};

const mapStateToProps = state => ({
  isLoggedIn: state.userData.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  authenticate: dispatchAuthenticate(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
