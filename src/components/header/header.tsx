import React from 'react';

import Logo from './../logo/logo';
import { Search } from './../search/search.js';

import "./../../Normalize.css";
import "./header.scss";

function Header() {
  const description:string = 'halcyon days';

  return (
    <header>
      <Logo />
      <Search />
      <p className="description">{description}</p>

    </header>
  )
}

export default Header;
