import React, { Fragment } from 'react';

import { CardsLayout } from '../containers/CardsLayout';

const Error = () => {
  return(
    <Fragment>
      <CardsLayout>
        <h6>You shouldn't be reading this... Anyway, have a nice day!</h6>
      </CardsLayout>
    </Fragment>
  )
};

export { Error };