import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import Map from "../map/map";

import "./../../Normalize.css";
import "./country-description.scss";

function CountryDescription(props: any) {
  const country = useSelector((state: State) => state.country.name);
  const lang = useSelector((state: State) => state.lang.lang);
  const capital = useSelector((state: State) => state.country.capital);
  const image = useSelector((state: State) => state.country.image);

  return (
    <div className="wrap-country-description">
      <div className="wrap-country-title">
        <div className="wrap-country-name">
          <h2 className="country">{country ? country[lang] : ""}</h2>
          <h2 className="capital">{capital ? capital[lang] : ""}</h2>
          <div className="wrap-country-info">
            <p>{props.description[lang]}</p>
          </div>
        </div>
        <div className="wrap-country-title-img">
          <img src={image ? image : ""} alt={country ? country[lang] : ""} />
        </div>
      </div>
      <div className="wrap-country-map">
        <div className="map">
          <div className="wrap-map">
            <Map lat={props.lon} lon={props.lat} iso={props.iso} />
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
  );
}

export default CountryDescription;
