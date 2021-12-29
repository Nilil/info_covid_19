import React, { Fragment } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../scss/layout.scss';

// Always display the header and footer, main contain may change
const Layout = ({children}) => {
  return(
    <Fragment>
      <Header/>
      {/* Layout is fully responsive thanks to grid */}
      <main className='hero-container'>
        {children}
      </main>
      <Footer/>
    </Fragment>
  )
};

export { Layout };