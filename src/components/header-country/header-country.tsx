import React from 'react';

import Logo from './../logo/logo';
import Toolbar from './../toolbar/toolbar';

import "./../../Normalize.css";
import "./header-country.scss";

function HeaderCountry() {
  const description:string = 'halcyon days';

  return (
    <header className="country">
      <Logo />
      <div className="toolbar-country">
        <Toolbar />
      </div>
      <p className="description">{description}</p>
    </header>
  )
}

export default HeaderCountry;
