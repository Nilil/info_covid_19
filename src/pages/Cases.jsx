import React, { Fragment } from 'react';

import { Layout } from '../containers/Layout';
import { Api } from '../components/Api';

const Cases = () => {
  return(
    <Fragment>
      <Layout>
        <Api
          display = 'cases'
        />
      </Layout>
    </Fragment>
  )
};

export { Cases };