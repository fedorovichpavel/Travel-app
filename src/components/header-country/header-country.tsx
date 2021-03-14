import React from 'react';

import Logo from './../logo/logo';

import "./../../Normalize.css";
import "./header-country.scss";

function HeaderCountry() {
  const description:string = 'halcyon days';

  return (
    <header className="country">
      <Logo />
      <p className="description">{description}</p>
    </header>
  )
}

export default HeaderCountry;
