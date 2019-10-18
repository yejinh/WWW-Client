import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../../container/NavContainer';
import FoundUserForm from '../FoundUserForm/FoundUserForm';
import AddedMembers from '../AddedMembers/AddedMembers';
import { vaildEmail } from '../../constants/regex';
import './NewProject.scss';

const NewProject = props => {
  const {
    loggedInUser,
    isCreated,
    addedMembers,
    foundUser,
    onInitMember,
    onSubmitClick,
    onMemberFind,
    onMemberAdd,
    onMemberRemove
  } = props;

  const [ title, setTitle ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ errMessage, setErrMessage ] = useState('');

  useEffect(() => {
    onInitMember(loggedInUser);
  }, [ loggedInUser ]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitClick(title, addedMembers);
    setTitle('');
  };

  const handleFindMemberByEmail = e => {
    e.preventDefault();

    if (!vaildEmail.test(email)) {
      setErrMessage('유효하지 않은 이메일 주소입니다');
      return setEmail('');
    }

    onMemberFind(email);
    setEmail('');
  };

  return (
    <>
      <NavContainer />
      <div className="new-project-wrapper">
        {isCreated &&
          <>
            <div>New Project Created!</div>
            <Link
              to="/"
              className="new-project-main-button"
            >
              main
            </Link>
          </>
        }
        {!isCreated &&
          <div className="new-project-form-wrapper">
            <h1>NewProject</h1>
            <form onSubmit={handleSubmit}>
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
            {foundUser &&
              <FoundUserForm
                onSubmitClick={onMemberAdd}
                user={foundUser}
              />
            }
            {addedMembers.length &&
              <ul className="new-project-members-wrapper">
                {addedMembers.map(member => (
                  <AddedMembers
                    key={member._id}
                    loggedInUser={loggedInUser}
                    member={member}
                    onRemoveClick={onMemberRemove}
                  />
                ))}
              </ul>
            }
          </div>
        }
      </div>
    </>
  );
};

export default NewProject;
