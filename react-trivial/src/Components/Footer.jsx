import React, { useState } from "react";
import "./Footer.css";
import image1 from "../Images/facebook.png";
import image2 from "../Images/instagram.png";
import image3 from "../Images/linkedin.png";
import image4 from "../Images/twitter.png";
import image5 from "../Images/tiktok2.png";
import FooterForm from "./FooterForm";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const ShowModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="footcontent">
     

      {/*<div className="categories">
        <a href="Accueil">Accueil</a>
        <a href="Categories">Catégories</a>
         {isOpen && <FooterForm setIsOpen={setIsOpen} />}
        <a className="Contact" href="#Contact" onClick={ShowModal}>
          Contact
        </a>
      </div>
      <ul className="firstline">
        <li>
          <a href="Sport">Sports</a>
        </li>
        <li>
          <a href="Musique">Musique</a>
        </li>
        <li>
          <a href="Jeux Videos">Jeux Videos</a>
        </li>
        <li>
          <a href="Ordinateurs">Ordinateurs</a>
        </li>
        <li>
          <a href="Geographie">Geographie</a>
        </li>
        <li>
          <a href="Film">Film</a>
        </li>
        <li>
          <a href="Manga">Manga</a>
        </li>
        <li>
          <a href="Mythologie">Mythologie</a>
        </li>
        <li>
          <a href="Choix Aleatoire">Choix Aléatoire</a>
        </li>
      </ul>
      <div className="imgsoc">
        <a href="https://m.facebook.com/login/?locale=fr_FR">
          {" "}
          <img className="logface" src={image1} alt="logo facebook" />
        </a>
        <a href="https://www.instagram.com/?hl=fr">
          {" "}
          <img className="loginst" src={image2} alt="logo instagram" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          {" "}
          <img className="loglink" src={image3} alt="logo linkedin" />
        </a>
        <a href="https://twitter.com/?lang=fr">
          {" "}
          <img className="logtwit" src={image4} alt="logo twitter" />
        </a>
        <a href="https://www.tiktok.com/?lang=fr">
          {" "}
          <img className="logtiktok" src={image5} alt="logo tiktok" />
        </a>
        <p className="Copyright">Copyright2022.Tousdroitsréservés</p>
      </div>*/}
    </div>
  );
}
export default Footer;
