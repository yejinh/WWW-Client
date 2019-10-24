import React from 'react';
import './FoundUserForm.scss';

const FoundUserForm = ({ onSubmitClick, user }) => (
  <form onSubmit={onSubmitClick}>
    <label>
      <input
        type='radio'
        className='option-radio'
        required
      />
      <span
        className='option'
      >
      {user.name}
      </span>
    </label>
    <input
      type='submit'
      className='add-member'
      value='Add'
    />
  </form>
);

export default FoundUserForm;
