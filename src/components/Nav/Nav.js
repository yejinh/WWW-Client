import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
  const { userName, profilePhoto } = props;
  return (
    <>
      <div className="nav-wrapper">
        <h1 className="nav-title">We Will Work</h1>
        <div className="nav-user-profile">
          <div
            className="nav-user-photo"
            style={{ "backgroundImage": `url(${profilePhoto})` }}
          />
          <div
            className="nav-user-name"
          >
            {userName}
          </div>
        </div>
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
