import React, { useEffect } from 'react';
import NavContainer from '../../container/NavContainer';
import './Projects.scss';

const Projects = props => {
  const { userId, fetchProjects, projects } = props;

  useEffect(() => {
    fetchProjects(userId);
  }, [ userId ]);

  return (
    <>
      <NavContainer />
      <div className="projects-wrapper">
        <ul>
        {projects.length &&
          projects.map(project => <li>{project.title}</li>)
        }
        </ul>
      </div>
    </>
  );
}

export default Projects;
