import React from "react";
import "./Content.css";
import Card from "./Card";


const Content = ({ setBegin }) => {
  return (
    <div className="content">
      {/* property and parameter for switching */}
      <Card setBegin={setBegin} />
    </div>
  );
};

export default Content;
