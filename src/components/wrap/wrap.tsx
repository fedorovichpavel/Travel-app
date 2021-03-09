import React from 'react';
import ReactDOM from 'react-dom';

import ListCards from './../list-cards/List-cards';

import "./../../Normalize.css";
import "./wrap.scss";

function Wrap() {

  return (
    <div className="wrap">
      <div className="wrap-description">
        <p>ready for your</p>
        <p>next trip?</p>
      </div>
      <ListCards />
    </div>
  )
}

export default Wrap;
