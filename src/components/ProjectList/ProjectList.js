import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMembers from '../ProjectMembers/ProjectMembers';

const ProjectList = ({ project, members }) => (
  <li
    key={project._id}
    className="main-project"
  >
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
    <ul className="main-project-member-wrapper">
      {members &&
        members.map(member => <ProjectMembers member={member} />)
      }
    </ul>
  </li>
);

export default ProjectList;
