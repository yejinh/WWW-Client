import React, { useEffect } from 'react';
import Login from '../Login/Login';
import MainContainer from '../../container/MainContainer';
import NewProjectContainer from '../../container/NewProjectContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const App = props => {
  useEffect(() => {
    props.fetchUserData();
  });

  return (
    <Router>
      <Switch>
        {!props.isLoggedIn &&
          <Login authenticate={props.authenticate} />
        }
        <Route exact path='/' component={MainContainer} />
        <Route path='/projects/new' component={NewProjectContainer} />
      </Switch>
    </Router>
  );
};

export default App;
