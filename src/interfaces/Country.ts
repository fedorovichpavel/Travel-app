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
  main: object,
  weather: Array<object>,
  wind: object
}

export interface ExchangeI {
  rates: object
}