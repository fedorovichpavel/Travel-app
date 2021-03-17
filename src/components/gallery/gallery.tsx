import React from "react";

import ItemGallery from "./../item-gallery/item-gallery";

import "./../../Normalize.css";
import "./gallery.scss";

function Gallery(props: any) {
  console.log(props.images);
  const list = [
    {
      id: 1,
      src:
        "https://travelata.ru/blog/wp-content/uploads/2019/06/s1200-12-1024x640.jpg",
      title: "Galley of type",
      preview:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      src:
        "https://travelata.ru/blog/wp-content/uploads/2019/06/s1200-12-1024x640.jpg",
      title: "Galley of type",
      preview:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      src:
        "https://travelata.ru/blog/wp-content/uploads/2019/06/s1200-12-1024x640.jpg",
      title: "Galley of type",
      preview:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 4,
      src:
        "https://travelata.ru/blog/wp-content/uploads/2019/06/s1200-12-1024x640.jpg",
      title: "Galley of type",
      preview:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 5,
      src:
        "https://travelata.ru/blog/wp-content/uploads/2019/06/s1200-12-1024x640.jpg",
      title: "Galley of type",
      preview:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 6,
      src:
        "https://travelata.ru/blog/wp-content/uploads/2019/06/s1200-12-1024x640.jpg",
      title: "Galley of type",
      preview:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  const list2 = props.images.map((image: any) => ({
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
        <ItemGallery list={list2} />
      </div>
    </div>
  );
}

export default Gallery;
