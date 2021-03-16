import React, {useEffect, useState} from 'react';

import "./../../Normalize.css";
import "./widget.scss";

function showWeekDay(d:any) {
  switch (d) {
      case 1:
          d = 'Monday';
          break;
      case 2:
          d = 'Tuesday';
          break;
      case 3:
          d = 'Wednesday';
          break;
      case 4:
          d = 'Thursday';
          break;
      case 5:
          d = 'Friday';
          break;
      case 6:
          d = 'Saturday';
          break;
      case 0:
          d = 'Sunday';
          break;
      default:
          break;
  }
  return d;
}

function showMonth(m:any) {
  switch (m) {
      case 0:
          m = 'January';
          break;
      case 1:
          m = 'February';
          break;
      case 2:
          m = 'March';
          break;
      case 3:
          m = 'April';
          break;
      case 4:
          m = 'May';
          break;
      case 5:
          m = 'June';
          break;
      case 6:
          m = 'July';
          break;
      case 7:
          m = 'August';
          break;
      case 8:
          m = 'September';
          break;
      case 9:
          m = 'October';
          break;
      case 10:
          m = 'November';
          break;
      case 11:
          m = 'December';
          break;
      default:
          break;
  }
  return m;
}

const currName = {

}

function Widget() {
  
  const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [weatherCity, setWeatherCity] = useState('');
  const [rates, setRates] = useState<Array<object>>([{conversion_rates: {RUB:''}},{conversion_rates: {RUB:''}}]);

  async function getExchangeRates(country:string) {
    try {
        const urlUsd = `https://v6.exchangerate-api.com/v6/a7abb4dade33065066de5fd3/latest/USD`;
        const resUsd = await fetch(urlUsd);
        const dataUsd:object = await resUsd.json();
        const urlEur = `https://v6.exchangerate-api.com/v6/a7abb4dade33065066de5fd3/latest/EUR`;
        const resEur = await fetch(urlEur);
        const dataEur:object = await resEur.json();

        setRates([dataUsd, dataEur]);

    } catch (e) {
       // throw Error('API Exchange Error - ' +  e);
    }
  }

  async function getWeather(city:string) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&lang=en&appid=ac9c43583866766e65ba2bc4a0d0f0ee&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        setWeatherCity(city);
        setWeatherIcon(`owf-${data.weather[0].id}`);
        setTemperature(`${data.main.temp}°C`);
        setWeatherDescription(data.weather[0].description);
        setHumidity(`Humidity: ${data.main.humidity}%`);
        setWind(`Wind speed: ${data.wind.speed} m/sec`);
    } catch (e) {
        throw Error('API Weather Error - ' +  e);
    }
  }

  //getExchangeRates('Minsk');
  //console.log(rates);
  //getWeather('Minsk');

  useEffect(()=> {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    week = today.getDay(),
    day = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();
   // getWeather('Minsk');
  //setTimeout(() => getWeather('Minsk'), 100000);
  setTimeout(()=> {
    setTime(`${hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`);
    setDay(`${showWeekDay(week)}, ${showMonth(month)} ${day}, ${year}`);
  }, 1000);
    return 
  });


  return (
    <div className="widget">
      <div className="wrap-widget">
        <div className="date-conteiner">
        <span className="days">{day}</span>
        <time className="time">{time}</time>
        </div>
        <div className="weather">
          <div className="weather-city">
            <span>{weatherCity}</span>
            <div className="weather-temp-icon">
              <i className={`weather-icon owf ${weatherIcon}`}></i>
              <div className="temperature">{temperature}</div>
            </div>
          </div>
          <div className="weather-info">
              <div className="weather-description">{weatherDescription}</div>
              <div className="humidity">{humidity}</div>
              <div className="wind">{wind}</div>
          </div>
        </div>
        <div className="exchange">
          <h2 className="exchange-title">Exchange Rates</h2>
                                                                
          <div className="exchange-usd curr">1 USD -&gt; {
              //@ts-ignore
          rates[0]['conversion_rates']['RUB']
          } RUB</div>
          <div className="exchange-eur curr">1 EUR -&gt; 3.232 RUB</div>
          </div>
      </div>
    </div>
  )
}

export default Widget;
