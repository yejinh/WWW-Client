import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLoading, fetchUserData } from '../actions';

export default function PrivateRoute(Component) {
  function AuthRoute({ fatchUserData }) {
    const userData = JSON.parse(localStorage.getItem('WWW'));

    useEffect(() => {
      if (!userData) return;

      fatchUserData(userData.token);
    }, [ fatchUserData, userData ]);

    return (
      <Route
        render={props => userData
          ? <Component {...props} />
          : <Redirect to="/login" />} />
    );
  }

  const dispatchFetchUserData = dispatch => async() => {
    try {
      dispatch(isLoading(true));

      const userData = JSON.parse(localStorage.getItem('WWW'));

      const res = await fetch(`${process.env.REACT_APP_HOST_URL}/api/users/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userData.token}`
        }
      });

      const json = await res.json();

      dispatch(fetchUserData(json.userData));
      dispatch(isLoading(false));
    } catch(err) {
      console.log(err);
    }
  }

  const mapDispatchToProps = dispatch => ({
    fatchUserData: dispatchFetchUserData(dispatch)
  });

  return connect(
    null,
    mapDispatchToProps
  )(AuthRoute);
}
