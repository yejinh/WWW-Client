import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './NewProject.scss';

const NewProject = props => {
  const [ title, setTitle ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmitClick(title, props.projectMembers);
    setTitle('');
  }

  const handleFindMemberByEmail = e => {
    e.preventDefault();
    props.onMemberFind(email);
    setEmail('');
  }

  return (
    <>
      <Nav
        userName={props.userName}
        profilePhoto={props.profilePhoto}
      />
      <div className="new-project-wrapper">
        <div className="new-project-form-wrapper">
          <h1>NewProject</h1>
          <form
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              value={title}
              required
              onChange={e => setTitle(e.target.value)}
            />
            <input type='submit'/>
          </form>
          <form
            onSubmit={handleFindMemberByEmail}
          >
            <input
              type='text'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='submit'
              value='find'
            />
          </form>
          {props.foundUser &&
            <span onClick={props.onMemberAdd}>
              {props.foundUser.email}{props.foundUser.name}
            </span>
          }
          <ul>
            {props.projectMembers.map(member => <li key={member._id}>{member.name}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewProject;
