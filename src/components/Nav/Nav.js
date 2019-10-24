import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { EXTENSION_URL } from '../../constants/urls';

const Nav = props => {
  const { userName, profilePhoto, onLogoutClick } = props;

  return (
    <>
      <div className='nav-wrapper'>
        <h1 className='nav-title'>We Will Work</h1>
        <div className='nav-user-profile'>
          <div
            className='nav-user-photo'
            style={{ 'backgroundImage': `url(${profilePhoto})` }}
          />
          <div
            className='nav-user-name'
          >
            {userName}
          </div>
        </div>
        <div className='nav-contents'>
          <Link
            to='/'
            className='nav-content'
          >
            <div className='nav-content-projects'/>
            <div className='nav-content-text'>DASHBOARD</div>
          </Link>
          <Link
            to='/projects/new'
            className='nav-content'
          >
            <div className='nav-content-new-project'/>
            <div className='nav-content-text'>NEW PROJECT</div>
          </Link>
          <a
            href={EXTENSION_URL}
            className='nav-content'
            target='_black'
          >
            <div className='nav-content-extension'/>
            <div className='nav-content-text'>EXTENSION</div>
          </a>
          <div
            className='nav-content'
            onClick={onLogoutClick}
          >
            <div className='nav-content-sign-out'/>
            <div className='nav-content-text'>SIGN OUT</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
