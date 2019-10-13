import React from 'react';

const Login = props => {
  const login = async() => {
    try {
      await props.authenticate();
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div onClick={login}>Login with Facebook</div>
  );
};

export default Login;
