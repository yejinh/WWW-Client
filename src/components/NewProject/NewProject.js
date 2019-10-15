import React, { useState } from 'react';
import NavContainer from '../../container/NavContainer';
import { vaildEmail } from '../../constants/regex';
import './NewProject.scss';

const NewProject = props => {
  const [ title, setTitle ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ errMessage, setErrMessage ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmitClick(title, props.projectMembers);
    setTitle('');
  }

  const handleFindMemberByEmail = e => {
    e.preventDefault();

    if (!vaildEmail.test(email)) {
      setErrMessage('유효하지 않은 이메일 주소입니다');
      return setEmail('');
    }

    props.onMemberFind(email);
    setEmail('');
  }

  return (
    <>
      <NavContainer />
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
              type='email'
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              onClick={e => setErrMessage('')}
            />
            <input
              type='submit'
              value='find'
            />
          </form>
          {errMessage &&
            <span>{errMessage}</span>
          }
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
