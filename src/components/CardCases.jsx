import React from 'react';

import '../scss/cards.scss';

const CardCases = ({ country, cases, deaths, deathPercentage}) => {
  return(
    <section className='card-container'>
      <h3 className='card__title'>{country}</h3>
      <p>Cases: {cases}</p>
      <p>Deaths: {deaths}</p>
      <p>Death percentage: {deathPercentage}%</p>
    </section>
  )
};

export { CardCases };