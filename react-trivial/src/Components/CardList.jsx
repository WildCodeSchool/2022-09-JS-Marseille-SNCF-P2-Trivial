import React from "react";
import "./card.css";
import imageAnimal from "../Images/imageAnimal.jpg";

const CardList = ({ name, id }) => {
  return (
    <div className={id}>
    <div className="card">
      {/* <a href="test" target="_blank"> */}
      <div className="categoryImg">
        <g-img>
          <img src={imageAnimal} alt="" />
        </g-img>
      </div>
      <div className="categoryText">{name}</div>
      {/* </a> */}
    </div>
    </div>
  );
};

export default CardList;
