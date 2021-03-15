import React from 'react';

import "./../../Normalize.css";
import "./card.scss";

function Card(props:any) {
  let countItems = props.count;
  let listItems = props.items;

  listItems = listItems.map((item:any, i:any) =>
    <div key={i.toString()} className={`item-${item.id} item`} data-country={item.id}>
      <a href="/country">
        <div className="wrap-country">
          <div className="country">
            <div className="country-img">
              <img src={item.img} alt="" />
            </div>
            <h4>{item.country.en}</h4>
            <h5>{item.capital.en}</h5>
          </div>
        </div>
      </a>
    </div>
  );

  return (
    <div className="item-country">
      {listItems}
    </div>
  )
}

export default Card;
