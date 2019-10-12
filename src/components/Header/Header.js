import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <>
      <span>HEADER</span>
      <Link to="/projects/new">NEW</Link>
      <span>logout</span>
    </>
  );
};

export default Header;
