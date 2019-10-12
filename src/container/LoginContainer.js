// import { connect } from 'react-redux';
// // import firebase from 'firebase'; // 배포용?
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../config/firebase';
// import Login from '../components/Login/Login';
// import { isLoggedIn } from '../actions';

// const dispatchAuthenticate = dispatch => async() => {
//   try {
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }

//     const provider = new firebase.auth.FacebookAuthProvider();
//     const result = await firebase.auth().signInWithPopup(provider);
//     const { user } = result;
//     const { email } = user;
//     const name = user.displayName;

//     const res = await fetch('http://localhost:8080/api/auth/authenticate', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({ email, name })
//     });

//     const json = await res.json();
//     const { access_token } = json;

//     dispatch(isLoggedIn(true));

//     return { token: access_token };
//   } catch(err) {
//     console.error(err);
//   }
// };

// const mapStateToProps = state => ({
//   isLoggedIn: state.userReducer.isLoggedIn
// });

// const mapDispatchToProps = dispatch => ({
//   authenticate: dispatchAuthenticate(dispatch)
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
