import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CardVaccines } from './CardVaccines';
import { CardCases } from './CardCases';

const Api = ({ display }) => {

  const [cassesAnswer, setCassesAnswer] = useState([]);
  const [vaccinesAnswer, setVaccinesAnswer] = useState([]);

  // Multiple API calls using axios
  const fetchData = () => {
    const CASES = 'https://covid-api.mmediagroup.fr/v1/cases';
    const VACCINES = 'https://covid-api.mmediagroup.fr/v1/vaccines';

    const getCasses = axios.get(CASES)
    const getVaccines = axios.get(VACCINES)
    axios.all([getCasses, getVaccines])
      .then(axios.spread((...allData) => {
        const allDataCasses = allData[0].data
        const allDataVaccines = allData[1].data

        setCassesAnswer(allDataCasses)
        setVaccinesAnswer(allDataVaccines)
        })
      )
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchData()
  },[])

  return(
    <>

      {/* Using display's value render just one component */}
      {/* A value who works as a key in needed :/ */}
      { display === 'cases' ?

      Object.values(cassesAnswer).map(ans => (

        <CardCases
          country = {ans.All.country}
          cases = {ans.All.confirmed}
          deaths = {ans.All.deaths}
          deathPercentage = {((ans.All.deaths * 100) / ans.All.confirmed).toFixed(2)}
        />

      ))

    : display === 'vaccines' ?

      Object.values(vaccinesAnswer).map(ans => (

        <CardVaccines
          country = {ans.All.country}
          doses = {ans.All.administered}
          vaccinatedPercentage = {((ans.All.people_partially_vaccinated * 100) / ans.All.population).toFixed(2)}
        />

      ))

    : null}

    </>
  )
};

export { Api };
