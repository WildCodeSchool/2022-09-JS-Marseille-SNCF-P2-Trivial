import React, { useState, useEffect } from "react";
import "./Footer.css";
import image1 from "../Images/facebook.png";
import image2 from "../Images/instagram.png";
import image3 from "../Images/linkedin.png";
import image4 from "../Images/twitter.png";
import image5 from "../Images/tiktok2.png";
import FooterForm from "./FooterForm";
import Categories from "./Categories";
import axios from "axios";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  function ShowModal() {
    setIsOpen(!isOpen);
  }

  const getCategories = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => response.data)
      .then((data) => {
        setCategories(data);
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <footer>
      <div className="contentFoot">
        <div className="linkFoot">
          <a href="Home">Home</a>
          <a href="Categories">Categories</a>
          {isOpen && <FooterForm setIsOpen={setIsOpen} />}
          <a className="Contact" href="#Contact" onClick={ShowModal}>
            Contact
          </a>
        </div>
        <ul className="firstlineFoot">
          <li>
            <Categories categories={categories?.trivia_categories} />
          </li>
        </ul>
        <div className="imgsocFoot">
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
          <p className="CopyrightFoot">Copyright2022.Allrightsreserved</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
