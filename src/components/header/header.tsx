import React from 'react';
import ReactDOM from 'react-dom';

import "./../../Normalize.css";
import "./header.scss";

function Header() {
  const logo:string = 'Adventure';
  const prefixLogo:string = '- the -';
  const description:string = 'halcyon days';

  return (
    <header>
      <h1><a href="#"><span>{prefixLogo}</span><span>{logo}</span></a></h1>
      <p className="description">{description}</p>
    </header>
  )
}

export default Header;
