import React from 'react';

const CardCases = ({ country, cases, deaths, deathPercentage}) => {
  return(
    <section>
      <p>Country: <span>{country}</span></p>
      <p>Cases: {cases}</p>
      <p>Deaths: {deaths}</p>
      <p>Death percentage: {deathPercentage}%</p>
    </section>
  )
};

export { CardCases };