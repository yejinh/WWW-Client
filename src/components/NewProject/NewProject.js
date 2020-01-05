import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../../container/NavContainer';
import FoundUserForm from '../FoundUserForm/FoundUserForm';
import AddedMembers from '../AddedMembers/AddedMembers';
import { vaildEmail } from '../../constants/regex';
import { getTomorrowFormat } from '../../utils';
import './NewProject.scss';

const NewProject = props => {
  const [ title, setTitle ] = useState('');
  const [ endDate, setEndDate ] = useState(getTomorrowFormat);
  const [ email, setEmail ] = useState('');
  const [ errMessage, setErrMessage ] = useState('');

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

  useEffect(() => {
    onInitMember(loggedInUser);
  }, [ onInitMember, loggedInUser ]);

  const _handleSubmit = e => {
    e.preventDefault();
    onSubmitClick(title, endDate, addedMembers);
    setTitle('');
  };

  const _handleFindMemberByEmail = e => {
    e.preventDefault();

    if (!vaildEmail.test(email)) {
      setErrMessage('유효하지 않은 이메일 주소입니다');
      return setEmail('');
    }

    onMemberFind(email);
    setEmail('');
  };

  const _renderSuccess = () => (
    <>
      <div className='new-project-success'>
        New Project Created!
      </div>
      <Link to='/' className='main-button'>
        <div className='new-project-main-button' />
        <div> BACK TO MAIN </div>
      </Link>
    </>
  );

  return (
    <>
      <NavContainer />
      <div className='new-project-wrapper'>
        <div className='new-project-form-wrapper'>
          {isCreated && _renderSuccess()}
          {!isCreated &&
            <>
              <h1>New Project</h1>
              <form onSubmit={_handleSubmit}>
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
                  value={getTomorrowFormat}
                  min={getTomorrowFormat}
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
                onSubmit={_handleFindMemberByEmail}
              >
                <label
                  htmlFor='find-member'
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
                      key={member.name}
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
