import React from 'react';

import "./../../Normalize.css";
import "./lang.scss";

function Lang() {
  return (
    <div className="lang">
      <select>
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="fr">FR</option>
      </select>
    </div>
  )
}

export default Lang;
