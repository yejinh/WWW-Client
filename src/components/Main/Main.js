import React, { useEffect } from 'react';
import NavContainer from '../../container/NavContainer';
import ProjectList from '../ProjectList/ProjectList';
import './Main.scss';

const Main = props => {
  const { userId, projects, members, fetchProjects } = props;

  useEffect(() => {
    if (!userId) return;

    fetchProjects(userId);
  }, [ userId ]);

  return (
    <>
      <NavContainer />
      <div className="main-wrapper">
        <h1>MY PROJECTS</h1>
        <ul className="main-project-wrapper">
          {projects.length &&
            projects.map((project, i) => (
              <ProjectList
                key={project._id}
                project={project}
                members={members[i]}
              />
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default Main;
