import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/header.scss';

const Header = () => {
  return(
    <header>
      <Link to='/cases'>Cases</Link>
      <Link to='/vaccines'>Vaccines</Link>
    </header>
  )
};

export { Header };