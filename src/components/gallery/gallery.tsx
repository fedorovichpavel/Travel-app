import React from "react";

import ItemGallery from "./../item-gallery/item-gallery";

import "./../../Normalize.css";
import "./gallery.scss";

function Gallery(props: any) {
  const list = props.images.map((image: any) => ({
    id: image._id,
    src: image.img,
    title: {
      en: image.name.en,
      ru: image.name.ru,
      fr: image.name.fr,
    },
    preview: {
      en: image.description.en,
      ru: image.description.ru,
      fr: image.description.fr,
    },
    rate: image.rate,
  }));

  return (
    <div className="gallery">
      <div className="wrap-gallery">
        <ItemGallery list={list} />
      </div>
    </div>
  );
}

export default Gallery;
