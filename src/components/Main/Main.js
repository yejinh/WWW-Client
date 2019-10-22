import React, { useEffect } from 'react';
import NavContainer from '../../container/NavContainer';
import ProjectList from '../ProjectList/ProjectList';
import './Main.scss';

const Main = props => {
  const {
    isLoading,
    userId,
    projects,
    members,
    fetchProjects
  } = props;

  useEffect(() => {
    if (!userId) return;

    fetchProjects(userId);
  }, [ userId ]);

  return (
    <>
      <NavContainer />
      <div className="main-wrapper">
      {isLoading &&
      <div className='loading'>
        <img
          src='https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif'
          alt='loading'
        />
      </div>
      }
      {!isLoading &&
        <>
          <h1>MY PROJECTS</h1>
          <ul className="main-project-wrapper">
            <li className='project-header'>
              <span className='project-header-title'>PROJECT</span>
              <span className='project-header-progress'>STATUS</span>
              <span className='project-header-end-date'>END DATE</span>
              <span className='project-header-members'>MEMBERS</span>
            </li>
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
        </>
      }
      </div>
    </>
  );
};

export default Main;
