import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import "./map.scss";
import MapboxLanguage from "./mapLang";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmVkb3JvdmljaHBhdmVsIiwiYSI6ImNraW5lcTkzMzBtMW8ycm81cTd6N3N3aDIifQ.botvkeUgOwWBdkRdCIwuWg";

interface Props {
  lat: number;
  lon: number;
  iso: string;
}

const Map = (props: any) => {
  const lang: string = useSelector((state: State) => state.lang.lang);

  setTimeout(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.lat, props.lon],
      zoom: 3,
    });
    map.addControl(new MapboxLanguage({ defaultLanguage: lang }));
    map.addControl(new mapboxgl.FullscreenControl());

    map.on("load", function () {
      map.addSource("countries", {
        type: "vector",
        url: "mapbox://mapbox.country-boundaries-v1",
      });

      map.addLayer(
        {
          id: "countries-join",
          type: "fill",
          source: "countries",
          "source-layer": "country_boundaries",
          paint: {
            "fill-color": [
              "match",
              ["get", "iso_3166_1_alpha_3"],
              `${props.iso}`,
              "rgba(255, 7, 7, 0.3)",
              "rgba(0, 0, 0, 0)",
            ],
          },
        },
        "admin-1-boundary-bg"
      );
    });
  }, 0);

  return <div id="map"></div>;
};

export default Map;
