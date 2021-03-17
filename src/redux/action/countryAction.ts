import { objLang } from "../../interfaces/Country";
import { COUNTRY } from "../actionTypes";

export const changeCountry = (
  name: objLang,
  image: string,
  capital: objLang
) => ({
  type: COUNTRY,
  payload: {
    name,
    image,
    capital,
  },
});
