import { COUNTRY } from "../actionTypes";

const initialState = {
  name: null,
  image: null,
  capital: null,
};

export const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COUNTRY:
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
        capital: action.payload.capital,
      };
    default:
      return state;
  }
};
