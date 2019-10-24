import React from 'react';
import './Login.scss';

const Login = ({ authenticate }) => {
  const login = async() => {
    try {
      await authenticate();
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className='login-wrapper'>
      <div className='login-back' />
      <div className='login-box'>
        <div className='logo' />
        <h1>We Will Work</h1>
        <div
          onClick={login}
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
