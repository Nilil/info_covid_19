import React, { Fragment } from 'react';

import { Layout } from '../containers/Layout';
import { Api } from '../components/Api';

const Vaccines = () => {
  return(
    <Fragment>
      <Layout>
        <Api
          display = 'vaccines'
        />
      </Layout>
    </Fragment>
  )
};

export { Vaccines };