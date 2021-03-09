import React from 'react';

import WrapTitle from './../wrap-title/wrap-title';
import ListCards from './../list-cards/List-cards';

import "./../../Normalize.css";
import "./wrap.scss";

function Wrap() {

  return (
    <div className="wrap">
      <WrapTitle />
      <ListCards />
    </div>
  )
}

export default Wrap;
