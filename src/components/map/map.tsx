import React from 'react';
import './map.scss';
import MapboxLanguage from './mapLang';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


 
mapboxgl.accessToken = 'pk.eyJ1IjoiZmVkb3JvdmljaHBhdmVsIiwiYSI6ImNraW5lcTkzMzBtMW8ycm81cTd6N3N3aDIifQ.botvkeUgOwWBdkRdCIwuWg';

 const Map: React.FunctionComponent = () =>{
  setTimeout(()=> {
   const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], //координаты страны или города
    zoom: 12
    });
    //map.addControl(new MapboxLanguage({defaultLanguage: 'ru'}))
  }, 0);


 return (
  <div id="map"></div>
 )
}

export default Map;