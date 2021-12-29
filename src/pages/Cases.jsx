import React, { Fragment } from 'react';

import { CardsLayout } from '../containers/CardsLayout';
import { Api } from '../components/Api';

const Cases = () => {
  return(
    <Fragment>
      <CardsLayout>
        <Api
          display = 'cases'
        />
      </CardsLayout>
    </Fragment>
  )
};

export { Cases };