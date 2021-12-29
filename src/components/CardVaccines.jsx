import React from 'react';

import '../scss/cards.scss';

const CardVaccines = ({ country, doses, vaccinatedPercentage }) => {
  return(
    <section className='card-container'>
      <h3 className='card__title'>{country}</h3>
      <p>Doses applied: {doses}</p>
      <p>Population vaccinated: {vaccinatedPercentage}%</p>
    </section>
  )
};

export { CardVaccines };