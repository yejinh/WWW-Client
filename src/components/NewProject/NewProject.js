import React, { useState } from 'react';

const NewProject = props => {
  console.log(props);
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
      {props.user &&
        <span onClick={props.onMemberAdd}>
          {props.user.email}{props.user.name}
        </span>
      }
      <ul>
        {props.projectMembers.map(member => <li key={member._id}>{member.name}</li>)}
      </ul>
    </>
  );
};

export default NewProject;
