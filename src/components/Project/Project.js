import React from 'react';
import NavContainer from '../../container/NavContainer';
import './Project.scss';

const Project = props => {
  console.log(props);
  return (
    <>
      <NavContainer />
      <div className="project-wrapper">
        PROJECT
      </div>
    </>
  );
};

export default Project;
