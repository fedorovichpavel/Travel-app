import React, { useEffect, useState } from "react";

import "./../../Normalize.css";
import "./country.scss";

import HeaderCountry from "./../header-country/header-country";
import CountryDescription from "./../country-description/country-description";
import Gallery from "./../gallery/gallery";
import Widget from "./../widget/widget";
import Video from "./../video/video";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import axios from "axios";
import { URL } from "../../Constants";
import Loader from "../loader/Loader";

function Country() {
  const country = useSelector((state: State) => state.country.name?.en);
  const [response, setResponse] = useState<any | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.post(URL + "country", { country: country }).then(function (response) {
      console.log(response.data);
      
      setResponse(response.data);
    });
  }, [setResponse]);

  if (!response) {
    return (
      <>
        <HeaderCountry />
        <Loader />
      </>
    );
  } else {
    return (
      <div>
        <HeaderCountry />
        <CountryDescription
          description={response ? response.description : ""}
          lat={response.latLon.lat}
          lon={response.latLon.lon}
          iso={response.iso}
        />
        <Gallery />
        <div className="country-data-cols">
          <Video />
          <Widget />
        </div>
      </div>
    );
  }
}
//
export default Country;
