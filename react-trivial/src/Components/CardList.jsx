import React from "react";
import "./card.css";
import imageAnimal from "../Images/imageAnimal.jpg";

const CardList = ({ name, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <div className="categoryImg">
        <g-img>
          <img src={imageAnimal} alt="" />
        </g-img>
      </div>
      <div className="categoryText">{name}</div>
    </div>
  );
};

export default CardList;
