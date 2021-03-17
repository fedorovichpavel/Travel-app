import React, { useEffect, useState } from "react";
import "./../../Normalize.css";
import "./List-cards.scss";
import Card from "./../card/card";
import Loader from "../loader/Loader";
import { Country } from "../../interfaces/Country";
import axios from "axios";
import { URL } from "../../Constants";

function ListCards() {
  const [country, setCountry] = useState<Country[]>([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      const arr: any[] = [];
      if (response.data) {
        for (let index = 0; index < response.data.length; index++) {
          arr.push({
            _id: index,
            img: response.data[index].img,
            country: { ...response.data[index].country },
            capital: { ...response.data[index].capital },
          });
        }
        setCountry(arr);
      }
    });
  }, [setCountry]);

  return (
    <div className="wrap-list-countries">
      {country.length !== 0 ? <Card items={country} /> : <Loader />}
    </div>
  );
}

export default ListCards;
