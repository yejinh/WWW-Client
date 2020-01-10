import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.scss';

const Login = ({ authenticate, isLoggedIn }) => {

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (isLoggedIn) {
      history.replace(from);
    }
  }, [ from, history, isLoggedIn ]);

  const _login = async() => {
    try {
      await authenticate();
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div className='login-wrapper'>
      <div className='login-back' />
      <div className='login-box'>
        <div className='logo' />
        <h1>We Will Work</h1>
        <div
          onClick={_login}
          className='login-button'
        >
          GET STARTED
        </div>
        <div className='mobile-info'>
          PC version Only. Thank you!
        </div>
      </div>
    </div>
  );
};

export default Login;
