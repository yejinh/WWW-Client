import React from 'react';
import './ProjectMembers.scss';

const ProjectMembers = ({ member }) => (
  <span className='project-member-wrapper'>
    <div>
      <div
        className='project-member-photo'
        style={{
          'backgroundImage': `url(${member.profilePhoto}?height=50&width=50)`
        }}
      >
      </div>
      <div>{member.name}</div>
    </div>
  </span>
);

export default ProjectMembers;
