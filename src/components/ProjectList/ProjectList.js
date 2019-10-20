import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import ProjectMembers from '../ProjectMembers/ProjectMembers';

const ProjectList = ({ project, members }) => {
  const { end_date } = project;
  const now = new Date().toISOString();
  const isInProgress = end_date > now;
  const endDate = dateFormat(end_date, 'dddd, mmmm dS, yyyy hTT');

  return (
    <li
      key={project._id}
      className="main-project"
    >
      <div>
        <Link
          key={project._id}
          to={{
            pathname: `/project/${project._id}`,
            state: {
              project: project,
              members: members
            }
          }}
          className="main-project-title"
        >
          {project.title}
        </Link>
        {isInProgress
          ? <div className="progress-in progress">in progress</div>
          : <div className="progress-not progress">ended</div>
        }
        <div>end date: {endDate}</div>
      </div>
      <ul className="main-project-member-wrapper">
        {members &&
          members.map(member => <ProjectMembers key={member._id} member={member} />)
        }
      </ul>
    </li>
  );
};

export default ProjectList;
