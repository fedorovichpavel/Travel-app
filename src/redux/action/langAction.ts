import { LANG } from "../actionTypes";

export const changeLang = (str: "en" | "ru" | "fr") => ({
  type: LANG,
  payload: str,
});
