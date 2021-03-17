import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import { WeatherI } from "../../interfaces/Country";
import axios from "axios";

function Weather(props: any) {
 const [weather, setWeather] = useState<WeatherI[]>([{id: '', temp: 0, humidity: '', wind: 0}]);

 const lang:string = useSelector((state: State) => state.lang.lang);
 const data = weather[0];
 const humidity:any= {'en': 'Humidity', 'ru': 'Влажность', 'fr': 'Humidité'};
 const wind:any = {'en': 'Wind speed', 'ru': 'Скорость ветра', 'fr': 'Vitesse du vent'};

 useEffect(() => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.capital['en']}&&lang=en&appid=ac9c43583866766e65ba2bc4a0d0f0ee&units=metric`).then((response) => {
    const arr: any[] = [];
    if (response.data) {
        arr.push({
         temp: response.data.main.temp,
         id: response.data.weather[0].id,
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed
        });
 
      setWeather(arr);
    }
  });
}, [setWeather]);

  return (
<div className="weather">
          <div className="weather-city">
            <span>{props.capital[lang]}</span>
            <div className="weather-temp-icon">
              <i className={`weather-icon owf owf-${data.id}`}></i>
              <div className="temperature">{`${data.temp}°C`}</div>
            </div>
          </div>
          <div className="weather-info">
              <div className="humidity">{`${humidity[lang]}: ${data.humidity}%`}</div>
              <div className="wind">{`${wind[lang]}: ${data.wind} ${lang === 'ru' ? 'м/сек' : 'm/sec'}`}</div>
          </div>
        </div>
  )
}

export default Weather;