import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMembers from '../ProjectMembers/ProjectMembers';
import { getDateFormat } from '../../utils';
import './ProjectList.scss';

const ProjectList = ({ project, members }) => {
  const { end_date } = project;
  const now = new Date().toISOString();
  const isInProgress = end_date > now;
  const endDate = getDateFormat(end_date);

  members = members.concat(members.slice());

  return (
    <li
      key={project._id}
      className='project-list-wrapper'
    >
      <Link
        key={project._id}
        to={{
          pathname: `/project/${project._id}`,
          state: { members: members }
        }}
        className='project-list-title'
      >
        {project.title}
      </Link>
      {isInProgress
        ? <div className='progress'>
            <span className='progress-in'/>
            in progress
          </div>
        : <div className='progress'>
            <span className='progress-not'/>
            ended
          </div>
      }
      <span className='project-list-end-date'>{endDate}</span>
      <span className='project-list-members'>
        <div>
        <div className='project-list-member-wrapper'>
          {members &&
            members.map(member => (
              <span className='project-members'>
                <ProjectMembers
                  key={member._id}
                  member={member}
                />
              </span>
            ))
          }
        </div>
        </div>
      </span>
    </li>
  );
};

export default ProjectList;
