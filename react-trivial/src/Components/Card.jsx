import React from "react";
import "./card.css";
import image1 from "../Images/image1.jpg";

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 13, name: "Entertainment: Musicals & Theatres" },
  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },
  { id: 16, name: "Entertainment: Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
  { id: 24, name: "Politics" },
  { id: 25, name: "Art" },
  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 28, name: "Vehicles" },
  { id: 29, name: "Entertainment: Comics" },
  { id: 30, name: "Science: Gadgets" },
  { id: 31, name: "Entertainment: Japanese Anime & Manga" },
  { id: 32, name: "Entertainment: Cartoon & Animations" },
];
const id_categories = [11, 12, 15, 18, 20, 21, 22, 31];

export default function Cardeux() {
  return (
    <div className="containerCat">
      <div className="titleCategory">
        <h1>Chose a category</h1>
      </div>
      <div className="card">
        <a href="test" target="_blank">
          <div className="categoryImg">
            <g-img>
              <img src={image1} alt="" />
            </g-img>
          </div>
          <div className="categoryText">Entertainment: Film</div>
        </a>
      </div>
    </div>
  );
}
