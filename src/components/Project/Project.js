import React from 'react';
import NavContainer from '../../container/NavContainer';
import './Project.scss';

const Project = props => {
  const project = props.location.state.project;

  return (
    <>
      <NavContainer />
      <div className="project-wrapper">
        <h1>{project.title}</h1>
      </div>
    </>
  );
};

export default Project;
