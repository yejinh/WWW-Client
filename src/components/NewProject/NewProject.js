import React, { useState } from 'react';

const NewProject = props => {
  console.log(props);
  const [ title, setTitle ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatchSubmitClick();
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
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="submit"
        />
      </form>
      <form
        onSubmit={handleFindMemberByEmail}
      >
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="submit"
          value="find"
        />
      </form>
      {props.user &&
        <span>{props.user.email}{props.user.name}</span>
      }
    </>
  );
};

export default NewProject;
