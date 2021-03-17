import { objLang } from "../interfaces/Country";

export interface State {
  lang: LangReducer;
  country: CountryReducer;
}

interface LangReducer {
  lang: "ru" | "en" | "fr";
}

interface CountryReducer {
  name: objLang | null;
  image: null;
  capital: objLang | null;
}
