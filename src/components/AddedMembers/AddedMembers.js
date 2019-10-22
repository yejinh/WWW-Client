import React  from 'react';
import './AddedMembers.scss';

const ProjectMembers = ({ loggedInUser, member, onRemoveClick }) => (
  <li className='new-project-members' >
    <span className='new-project-members-name'>
      {member.name}
    </span>
    {loggedInUser._id !== member._id &&
      <button onClick={() => onRemoveClick(member)}>REMOVE</button>
    }
  </li>
);

export default ProjectMembers;
