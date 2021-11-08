import React from "react";
import "./Songcover.css";

function Songcover({ image, title, artist }) {
  return (
    <div className="songcover">
      <img src={image} alt="" srcset="" />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}

export default Songcover;
