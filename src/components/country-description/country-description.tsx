import React from 'react';
import Map from '../map/map';

import "./../../Normalize.css";
import "./country-description.scss";

function CountryDescription() {

  return (
    <div className="wrap-country-description">
      <div className="wrap-country-title">
        <div className="wrap-country-name">
          <h2 className="country">Greece</h2>
          <h2 className="capital">Athens</h2>
            <div className="wrap-country-info">
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
            </div>
        </div>
        <div className="wrap-country-title-img">

          <img src="https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg" alt="" />
        </div>
      </div>
      <div className="wrap-country-map">

        <div className="map">
          <div className="wrap-map">
            <Map />
          </div>
        </div>
        <div className="map-info">
          <h3>Top Things To Do</h3>
          <h4 className="map-info-one">night life</h4>
          <h4 className="map-info-two">hiking</h4>
          <h4 className="map-info-three">cruises & water tours</h4>
        </div>
      </div>
    </div>
  )
}

export default CountryDescription;
