import React from "react";
import image1 from "../Images/image1.jpg";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <h1>Chose a category</h1>
      <div className="card-list">
        <div className="cards">
          <article className="card">
            <img src={image1} alt="catégorie1" />
            <div className="container">
              <h2>
                <b>Sports</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie2" />
            <div className="container">
              <h2>
                <b>Musique</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie3" />
            <div className="container">
              <h2>
                <b>Games videos</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie4" />
            <div className="container">
              <h2>
                <b>Geographie</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie5" />
            <div className="container">
              <h2>
                <b>Film/TV</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie6" />
            <div className="container">
              <h2>
                <b>Manga</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie7" />
            <div className="container">
              <h2>
                <b>Mythologie</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie8" />
            <div className="container">
              <h2>
                <b>Choix Aleatoire</b>
              </h2>
            </div>
          </article>
          <article className="card">
            <img src={image1} alt="catégorie9" />
            <div className="container">
              <h2>
                <b>All categorys</b>
              </h2>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Content;
