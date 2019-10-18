import React from 'react';

const FoundUserForm = ({ onSubmitClick, user }) => (
  <form onSubmit={onSubmitClick}>
    <label>
      <input
        type="radio"
        className="option-radio"
        required
      />
      <span
        className="option"
      >
      {user.name}
      </span>
    </label>
    <input
      type="submit"
      value="Add Member"
    />
  </form>
);

export default FoundUserForm;
