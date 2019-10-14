import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
  return (
    <>
      <div className="nav-wrapper">
        <h1 className="nav-title">We Will Work</h1>
        <Link
          to="/"
          className="nav-content"
        >
          <span className="nav-projects"/>
          MY PROJECTS
        </Link>
        <Link
          to="/projects/new"
          className="nav-content"
        >
          <span className="nav-new-project"/>
          NEW PROJECT
        </Link>
        <div className="nav-content">
          <span className="nav-sign-out"/>
          Sign out
        </div>
      </div>
    </>
  );
};

export default Nav;
