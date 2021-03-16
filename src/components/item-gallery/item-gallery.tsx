import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./item-gallery.scss";

function ItemGallery(props: any) {
  const lang:string = useSelector((state: State) => state.lang.lang);

  let listItems = props.list;

  listItems = listItems.map((item: any, i: any) => (
      <li
        key={i.toString()}
        className={`item-${item.id} item`}
        data-country={item.id}
      >
        <div className="wrap-item">
          <img src={item.src} alt="" />
          <div className="item-content">
            <h4>{item.title}</h4>
          </div>
        </div>
        <div className="item-preview">
          <p>{item.preview}</p>
        </div>
      </li>
  ));

  return <ul className="item-gallery">{listItems}</ul>;
}

export default ItemGallery;
