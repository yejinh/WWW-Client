import React from 'react';

const ProjectMembers = ({ member }) => (
  <li>
    <div
      className="main-project-member-photo"
      style={{
        "backgroundImage": `url(${member.profilePhoto}?height=50&width=50)`
      }}
    >
    </div>
    <div>{member.name}</div>
  </li>
);

export default ProjectMembers;
