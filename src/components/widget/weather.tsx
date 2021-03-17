import React from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";


function Weather(props: any) {
 const lang:string = useSelector((state: State) => state.lang.lang);
 const data = props.items[0];
 const humidity:any= {'en': 'Humidity', 'ru': 'Влажность', 'fr': 'Humidité'};
 const wind:any = {'en': 'Wind speed', 'ru': 'Скорость ветра', 'fr': 'Vitesse du vent'};
  return (
<div className="weather">
          <div className="weather-city">
            <span>{`Minsk`}</span>
            <div className="weather-temp-icon">
              <i className={`weather-icon owf owf-${data.weather[0].id}`}></i>
              <div className="temperature">{`${data.main.temp}°C`}</div>
            </div>
          </div>
          <div className="weather-info">
              <div className="weather-description">{data.weather[0].description}</div>
              <div className="humidity">{`${humidity[lang]}: ${data.main.humidity}%`}</div>
              <div className="wind">{`${wind[lang]}: ${data.wind.speed} m/sec`}</div>
          </div>
        </div>
  )
}

export default Weather;