import React from "react";
import "./card.css";

const CardList = ({ name, onClick, imageCategory }) => {
  // const beginGame = () => props(true);
  return (
    <div onClick={onClick} className="cardCategoryContent">
      <div className="categoryContentImg">
        <g-img>
          <img src={imageCategory} alt="" />
        </g-img>
      </div>
      <div className="categoryContentText">{name}</div>
    </div>
  );
};

export default CardList;
