import React from 'react';

import "./../../Normalize.css";
import "./logo.scss";

function Logo() {
  const logo:string = 'Adventure';
  const prefixLogo:string = '- the -';

  return (
    <h1><a href="#"><span>{prefixLogo}</span><span>{logo}</span></a></h1>
  )
}

export default Logo;
