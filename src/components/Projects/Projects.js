import React from 'react';
import Nav from '../Nav/Nav';
import './Projects.scss';

const Projects = props => {
  return (
    <>
      <div className="projects-wrapper">
        <Nav
          userName={props.userName}
          profilePhoto={props.profilePhoto}
        />
      </div>
    </>
  );
}

export default Projects;
