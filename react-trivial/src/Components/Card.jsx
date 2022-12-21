import React, { useState, useEffect } from "react";
import "./card.css";
import CardList from "./CardList";
import axios from "axios";
import imageCategory_ from "../Images/ImagesCategories/imageCategory_.jpg";
import imageCategory_11 from "../Images/ImagesCategories/imageCategory_11.jpg";
import imageCategory_12 from "../Images/ImagesCategories/imageCategory_12.png";
import imageCategory_15 from "../Images/ImagesCategories/imageCategory_15.jpg";
import imageCategory_18 from "../Images/ImagesCategories/imageCategory_18.jpg";
import imageCategory_20 from "../Images/ImagesCategories/imageCategory_20.jpg";
import imageCategory_21 from "../Images/ImagesCategories/imageCategory_21.jpg";
import imageCategory_22 from "../Images/ImagesCategories/imageCategory_22.jpg";
import imageCategory_31 from "../Images/ImagesCategories/imageCategory_31.jpg";

//********************* category query data model ***************************/
// const categories = [
//   { id: 9, name: "General Knowledge" },
//   { id: 10, name: "Entertainment: Books" },
//   { id: 11, name: "Entertainment: Film" },
//   { id: 12, name: "Entertainment: Music" },
//   { id: 13, name: "Entertainment: Musicals & Theatres" },
//   { id: 14, name: "Entertainment: Television" },
//   { id: 15, name: "Entertainment: Video Games" },
//   { id: 16, name: "Entertainment: Board Games" },
//   { id: 17, name: "Science & Nature" },
//   { id: 18, name: "Science: Computers" },
//   { id: 19, name: "Science: Mathematics" },
//   { id: 20, name: "Mythology" },
//   { id: 21, name: "Sports" },
//   { id: 22, name: "Geography" },
//   { id: 23, name: "History" },
//   { id: 24, name: "Politics" },
//   { id: 25, name: "Art" },
//   { id: 26, name: "Celebrities" },
//   { id: 27, name: "Animals" },
//   { id: 28, name: "Vehicles" },
//   { id: 29, name: "Entertainment: Comics" },
//   { id: 30, name: "Science: Gadgets" },
//   { id: 31, name: "Entertainment: Japanese Anime & Manga" },
//   { id: 32, name: "Entertainment: Cartoon & Animations" },
// ];
const Card = ({ setBegin }) => {
  // const beginGameChild = () => props(selectedCategory);

  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    // beginGameChild();

    console.log(selectedCategory);
    // const beginGameChild = () => props(true);
    // return;
  }, [selectedCategory]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  // const [imageCategory, setImageCategory] = useState("");

  const getCategories = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => response.data)
      .then((data) => {
        setCategories(data.trivia_categories);
      });
  };

  const imageCatCard = [
    { id: 11, image: imageCategory_11 },
    { id: 12, image: imageCategory_12 },
    { id: 15, image: imageCategory_15 },
    { id: 18, image: imageCategory_18 },
    { id: 20, image: imageCategory_20 },
    { id: 21, image: imageCategory_21 },
    { id: 22, image: imageCategory_22 },
    { id: 31, image: imageCategory_31 },
    { id: "", image: imageCategory_ },
  ];

  const allcategories = [...categories, { id: "", name: "Random Choice" }];

  const id_categories = [11, 12, 15, 18, 20, 21, 22, 31, ""];
  const handleClick = (categoryArray) => {
    setSelectedCategory([categoryArray.id, categoryArray.name]);
    setBegin(true);
    console.log(categoryArray, "categoryArray");
  };
  return (
    <div className="containerCategoryContent">
      <div className="titleCategoryContent">
        <h1>Choose a category</h1>
      </div>
      {allcategories
        .filter((category) => id_categories.includes(category.id))
        .map((category, index) => (
          <div key={category.id}>
            <CardList
              name={category.name}
              imageCategory={imageCatCard[index]?.image}
              onClick={() => handleClick([category.id, category.name])}
            />
          </div>
        ))}
    </div>
  );
};
export default Card;
