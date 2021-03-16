import React from 'react';


function Weather(props: any) {
 const data = props.items[0];

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
              <div className="humidity">{`Humidity: ${data.main.humidity}%`}</div>
              <div className="wind">{`Wind speed: ${data.wind.speed} m/sec`}</div>
          </div>
        </div>
  )
}

export default Weather;