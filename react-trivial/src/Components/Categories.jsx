import React from "react";
import Footer from "./Footer";

const Categories = ({ categories = [] }) => {


  const allcategories = [...categories, { id: "", name: "Random Choice" }];
  const id_categories = [11, 12, 15, 18, 20, 21, 22, 31, ""];
  const categoriesFilter = allcategories?.filter((category) => {
     
      return id_categories.includes(category.id);

    });

  console.log(categoriesFilter, "result");
  return (
    <div className="categoriesFoot">
      {categoriesFilter?.map((category) => {
        return (
          <div>
            <li>
              <a href={category?.name}>{category?.name}</a>
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;
