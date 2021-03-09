import React from 'react';
import ReactDOM from 'react-dom';

import ListCards from './../list-cards/List-cards';

import "./../../Normalize.css";
import "./wrap.scss";

function Wrap() {

  return (
    <div className="wrap">
      <ListCards />
    </div>
  )
}

export default Wrap;
