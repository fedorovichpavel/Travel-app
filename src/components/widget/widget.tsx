import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader";

import "./../../Normalize.css";
import "./widget.scss";
import Time from './time';
import Weather from './weather';
import { WeatherI, ExchangeI } from "../../interfaces/Country";
import Exchange from './exchange';


function Widget() {
  
    const [weather, setWeather] = useState<WeatherI[]>([]);
    const [ratesUSD, setRatesUSD] = useState<ExchangeI[]>([]);
    const [ratesEUR, setRatesEUR] = useState<ExchangeI[]>([]);

//key api 8f05f38e9ab678b53835461d

  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/${/*key*/'212'}/latest/USD`).then((response) => {
      const dataUSD: any[] = [];
      if (response.data) {
          dataUSD.push({
            rates: response.data.conversion_rates
          });
        setRatesUSD(dataUSD);
      }
    });
  }, [setRatesUSD]);

  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/${/*key*/'212'}/latest/EUR`).then((response) => {
      const dataEUR: any[] = [];
      if (response.data) {
          dataEUR.push({
            rates: response.data.conversion_rates
          });
        setRatesEUR(dataEUR);
      }
    });
  }, [setRatesEUR]);
  
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${/*city*/`Minsk`}&&lang=en&appid=ac9c43583866766e65ba2bc4a0d0f0ee&units=metric`).then((response) => {
      const arr: any[] = [];
      if (response.data) {

          arr.push({
            main: response.data.main,
            weather: response.data.weather,
            wind: response.data.wind
          });
   
        setWeather(arr);
      }
    });
  }, [setWeather]);


  return (
    <div className="widget">
      <div className="wrap-widget">
        <Time />
        {weather.length !== 0 ? (
        <Weather items={weather} />
      ) : (
        <Loader />
      )}
      {ratesUSD.length !== 0 ? (
        <Exchange usd={ratesUSD} eur={ratesEUR}/>
      ) : (
        <Loader />
      )}
      </div>
    </div>
  )
}

export default Widget;
