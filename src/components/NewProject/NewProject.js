import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
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

  const tomorrow = new Date().setDate(new Date().getDate() + 1);
  const minTime = dateFormat(tomorrow, "yyyy-mm-dd'T'HH:00");

  const [ title, setTitle ] = useState('');
  const [ endDate, setEndDate ] = useState(minTime);
  const [ email, setEmail ] = useState('');
  const [ errMessage, setErrMessage ] = useState('');

  useEffect(() => {
    onInitMember(loggedInUser);
  }, [ loggedInUser ]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitClick(title, endDate, addedMembers);
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
      <div className='new-project-wrapper'>
        <div className='new-project-form-wrapper'>
          {isCreated &&
            <>
              <div className='new-project-success'>
                New Project Created!
              </div>
              <div className='new-project-success-icon'/>
              <Link to='/'>
                <div className='new-project-main-button' />
                <div> BACK TO MAIN </div>
              </Link>
            </>
          }
          {!isCreated &&
            <>
              <h1>NewProject</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                  placeholder='TITLE'
                  maxLength='12'
                  required
                />
                <input
                  type='datetime-local'
                  onChange={e => setEndDate(e.target.value)}
                  value={minTime}
                  min={minTime}
                  className='end-date'
                  autoComplete='off'
                  required
                />
                <input
                  type='submit'
                  className='new-project-submit'
                  value='Submit'
                />
              </form>
              <form
                onSubmit={handleFindMemberByEmail}
              >
                <label
                  for='find-member'
                  className='find-member-label'
                >
                  Find Members
                </label>
                <div>
                  <input
                    type='email'
                    id='find-member'
                    onChange={e => setEmail(e.target.value)}
                    onClick={e => setErrMessage('')}
                    value={email}
                    placeholder='example@example.com'
                    required
                  />
                  <input
                    type='submit'
                    className='find-member-submit'
                    value='find'
                  />
                </div>
              </form>
              {errMessage && <span>{errMessage}</span> }
              {foundUser &&
                <FoundUserForm
                  onSubmitClick={onMemberAdd}
                  user={foundUser}
                />
              }
              {addedMembers.length &&
                <ul className='new-project-members-wrapper'>
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
            </>
          }
        </div>
      </div>
    </>
  );
};

export default NewProject;
