import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeCountry } from "../../redux/action/countryAction";
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./card.scss";

function Card(props: any) {
  const lang: string = useSelector((state: State) => state.lang.lang);
  const dispatch = useDispatch();

  let listItems = props.items;

  listItems = listItems.map((item: any, i: any) => (
    <div
      key={i.toString()}
      className={`item-${item.id} item`}
      data-country={item.id}
    >
      <Link to="/country">
        <div
          className="wrap-country"
          onClick={() => {
            dispatch(changeCountry(item.country, item.img, item.capital));
          }}
        >
          <div className="country">
            <div className="country-img">
              <img src={item.img} alt="" />
            </div>
            <h4>{item.country[lang]}</h4>
            <h5>{item.capital[lang]}</h5>
          </div>
        </div>
      </Link>
    </div>
  ));

  return <div className="item-country">{listItems}</div>;
}

export default Card;
