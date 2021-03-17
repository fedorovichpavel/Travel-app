import { combineReducers } from "redux";
import { countryReducer } from "./countryReducer";
import { langReducer } from "./langReducer";

export const rootReducer = combineReducers({
  lang: langReducer,
  country:countryReducer,
});
