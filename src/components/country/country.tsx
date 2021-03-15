import React from 'react';

import "./../../Normalize.css";
import "./country.scss";

import HeaderCountry from './../header-country/header-country';
import CountryDescription from './../country-description/country-description';
import Gallery from './../gallery/gallery';
import Widget from './../widget/widget';

function Country() {

  return (
    <div>
      <HeaderCountry />
      <CountryDescription />
      <Gallery />
      <div className="country-data-cols">
        <Widget />
      </div>
    </div>
  )
}

export default Country;
