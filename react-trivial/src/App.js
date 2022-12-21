import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Game from "./Components/Game";
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  //global state to switch between content and game
  const [begin, setBegin] = useState(false);
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* switch between content and game with property and parameter */}
      {begin ? <Game /> : <Content setBegin={setBegin} />}
      <Footer />
    </div>
  );
};

export default App;
