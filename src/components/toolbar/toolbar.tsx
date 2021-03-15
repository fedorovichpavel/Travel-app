import React from 'react';

import Login from './../login/login';
import Lang from './../lang/lang';

import "./../../Normalize.css";
import "./toolbar.scss";

function Toolbar() {
  return (
    <div className="toolbar">
      <Login />
      <Lang />
    </div>
  )
}

export default Toolbar;
