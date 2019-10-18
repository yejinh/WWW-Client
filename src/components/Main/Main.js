import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../../container/NavContainer';
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
        <ul>
          {projects.length &&
            projects.map((project, i) => (
              <li>
                <div>
                  <Link
                    key={project._id}
                    to={{
                      pathname: `/project/${project._id}`,
                      state: { project: project }
                    }}
                    className="main-project-title"
                  >
                    {project.title}
                  </Link>
                </div>
                {members[i] &&
                  members[i].map(member => (
                    <div
                      className="main-project-member-photo"
                      style={{
                        "backgroundImage": `url(${member.profilePhoto}?height=50&width=50)`
                      }}
                    />
                  ))
                }
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default Main;
