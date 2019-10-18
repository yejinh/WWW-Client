import React, { useEffect } from 'react';
import Login from '../Login/Login';
import MainContainer from '../../container/MainContainer';
import NewProjectContainer from '../../container/NewProjectContainer';
import ProjectConainter from '../../container/ProjectConainter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const App = ({ isLoggedIn, authenticate, fetchUserData }) => {
  useEffect(() => {
    fetchUserData();
  }, [ isLoggedIn ]);

  return (
    <Router>
      <Switch>
        {!isLoggedIn &&
          <Login authenticate={authenticate} />
        }
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/projects/new' component={NewProjectContainer} />
        <Route path='/project/:project_id' component={ProjectConainter} />
      </Switch>
    </Router>
  );
};

export default App;
