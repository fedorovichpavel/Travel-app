import { KeyObject } from "crypto";

export interface Country {
  _id: number;
  img: string;
  country: objLang;
  capital: objLang;
}

export interface objLang {
  en: string;
  ru: string;
  fr: string;
}

export interface WeatherI {
  id:string;
  temp: number;
  humidity: string;
  wind:number;
}

export interface ExchangeI {
  rates: any
}