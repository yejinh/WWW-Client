import React from 'react';
import PrivateRoute from '../PrivateRoute';
import LoginContainer from '../../container/LoginContainer';
import MainContainer from '../../container/MainContainer';
import NewProjectContainer from '../../container/NewProjectContainer';
import ProjectConainter from '../../container/ProjectConainter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={PrivateRoute(MainContainer)} />
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/projects/new' component={PrivateRoute(NewProjectContainer)} />
        <Route exact path='/projects/:project_id' component={PrivateRoute(ProjectConainter)} />
      </Switch>
    </Router>
  );
};

export default App;
