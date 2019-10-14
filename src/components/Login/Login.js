import React from 'react';
import './Login.scss';

const Login = props => {
  const login = async() => {
    try {
      await props.authenticate();
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="login-wrapper">
      <h1>We Will Work</h1>
      <div
        onClick={login}
        className="login-button"
      >
      </div>
    </div>
  );
};

export default Login;
