import { LANG } from "../actionTypes";

const initialState = {
  lang: "en",
};

export const langReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
