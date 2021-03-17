import React from "react";

import "./../../Normalize.css";
import "./video.scss";

function Video(props:any) {
  return (
    <div className="video">
      <div className="wrap-video">
        <iframe
          width="560"
          height="315"
          src={props.link}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
