import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../../container/NavContainer';
import ProjectList from '../ProjectList/ProjectList';
import Loading from '../Loading/Loading';
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
  }, [ fetchProjects, userId ]);


  return (
    <>
      <NavContainer />
      <div className="main-wrapper">
      {isLoading && <Loading />}
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
            {!projects.length &&
              <li className='project-list-wrapper'>
                <Link
                  to='/projects/new'
                  className='first-project'
                >
                  START PROJECT
                </Link>
              </li>
            }
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
