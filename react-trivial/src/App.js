import React, { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
//import Container from './Components/Container';

import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
