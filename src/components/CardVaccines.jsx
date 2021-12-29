import React from 'react';

const CardVaccines = ({ country, doses, vaccinatedPercentage }) => {
  return(
    <section>
      <p>Country: <span>{country}</span></p>
      <p>Doses applied: {doses}</p>
      <p>Population vaccinated: {vaccinatedPercentage}%</p>
    </section>
  )
};

export { CardVaccines };