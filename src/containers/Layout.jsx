import React, { Fragment } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Always display the header and footer, main contain may change
const Layout = ({children}) => {
  return(
    <Fragment>
      <Header/>
      {children}
      <Footer/>
    </Fragment>
  )
};

export { Layout };