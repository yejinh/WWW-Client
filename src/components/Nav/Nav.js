import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = props => {
  const { userName, profilePhoto, onLogoutClick } = props;

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
        <div className="nav-contents">
          <Link
            to="/"
            className="nav-content"
          >
            <span className="nav-content-projects"/>
            <span className="nav-content-text">MY PROJECTS</span>
          </Link>
          <Link
            to="/projects/new"
            className="nav-content"
          >
            <span className="nav-content-new-project"/>
            <span className="nav-content-text">NEW PROJECT</span>
          </Link>
          <div
            className="nav-content"
            onClick={onLogoutClick}
          >
            <span className="nav-content-sign-out"/>
            <span className="nav-content-text">Sign out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
