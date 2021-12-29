import React, { Fragment } from 'react';

import { CardsLayout } from '../containers/CardsLayout';
import { Api } from '../components/Api';

const Vaccines = () => {
  return(
    <Fragment>
      <CardsLayout>
        <Api
          display = 'vaccines'
        />
      </CardsLayout>
    </Fragment>
  )
};

export { Vaccines };