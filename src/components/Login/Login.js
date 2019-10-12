import React from 'react';
import Cookie from 'js-cookie';

const Login = props => {
  const login = async() => {
    try {
      const access_token = await props.authenticate();

      Cookie.set('token', access_token);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div onClick={login}>Login with Facebook</div>
  );
};

export default Login;
