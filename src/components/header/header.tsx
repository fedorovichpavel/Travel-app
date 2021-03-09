import React from 'react';

import Logo from './../logo/logo';

import "./../../Normalize.css";
import "./header.scss";

function Header() {
  const logo:string = 'Adventure';
  const prefixLogo:string = '- the -';
  const description:string = 'halcyon days';

  return (
    <header>
      <Logo />
      <p className="description">{description}</p>
    </header>
  )
}

export default Header;
