import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/header.scss';

import '../scss/header.scss';
import icon from '../assets/icon-covid.svg';

const Header = () => {
  return(
    <header className="head">
      <Link to='/' className="head__banner">
        <img src={icon} alt="Info covid icon" />
        <h3>Info Covid 19</h3>
      </Link>
      <div className="head__nav">
        <Link to='/cases'>Cases</Link>
        <Link to='/vaccines'>Vaccines</Link>
      </div>
    </header>
  )
};

export { Header };