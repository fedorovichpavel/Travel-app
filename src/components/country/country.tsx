import React from 'react';

import "./../../Normalize.css";
import "./country.scss";

import HeaderCountry from './../header-country/header-country';
import CountryDescription from './../country-description/country-description';

function Country() {

  return (
    <div>
      <HeaderCountry />
      <CountryDescription />
    </div>
  )
}

export default Country;
