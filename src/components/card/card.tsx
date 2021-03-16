import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./card.scss";

function Card(props: any) {
  const lang:string = useSelector((state: State) => state.lang.lang);
  
  let listItems = props.items;

  listItems = listItems.map((item: any, i: any) => (
    <div
      key={i.toString()}
      className={`item-${item.id} item`}
      data-country={item.id}
    >
      <a href="/country">
        <div className="wrap-country">
          <div className="country">
            <div className="country-img">
              <img src={item.img} alt="" />
            </div>
            <h4>{item.country[lang]}</h4>
            <h5>{item.capital[lang]}</h5>
          </div>
        </div>
      </a>
    </div>
  ));

  return <div className="item-country">{listItems}</div>;
}

export default Card;
