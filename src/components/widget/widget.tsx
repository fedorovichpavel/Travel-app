import React from 'react';

import "./../../Normalize.css";
import "./widget.scss";
import Time from './time';
import Weather from './weather';
import Exchange from './exchange';


function Widget(props:any) {

  return (
    <div className="widget">
      <div className="wrap-widget">
        <Time capital={props.data.country.capital}/>
        <Weather capital={props.data.country.capital}/>
        <Exchange currency={props.currency}/>
      </div>
    </div>
  )
}

export default Widget;
