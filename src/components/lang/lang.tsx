import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/action/langAction";
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./lang.scss";

function Lang() {
  const lang = useSelector((state: State) => state.lang.lang);
  const dispatch = useDispatch();

  const handleChange = (event: any) => dispatch(changeLang(event.target.value));

  return (
    <div className="lang">
      <select onChange={handleChange}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
}

export default Lang;
