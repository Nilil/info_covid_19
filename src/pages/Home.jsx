import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../scss/home.scss';

const Home = () => {
  return(
    <Fragment>
      <main className='home-container'>
        <section className='home__text'>
          <h2>Welcome!</h2>
          <p>Chekout the newest data related to Covid-19 around the world.</p>
        </section>
        <section className='home__links'>
          <Link className='home__links--buttons' to='/cases'>Cases</Link>
          <Link className='home__links--buttons' to='/vaccines'>Vaccines</Link>
        </section>
      </main>
    </Fragment>
  )
};

export { Home };