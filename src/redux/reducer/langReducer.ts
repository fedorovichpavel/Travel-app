import { LANG } from "../actionTypes";

const initialState:any = {
  lang: localStorage.getItem("language") ? localStorage.getItem("language") : "en",
};

export const langReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LANG:
      localStorage.setItem("language", action.payload);
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
