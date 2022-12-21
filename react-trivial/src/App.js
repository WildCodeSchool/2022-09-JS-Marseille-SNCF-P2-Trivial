import React, {useState} from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Content from "./Components/Content";
import Game from './Components/Game';
import "./App.css";
import Footer from "./Components/Footer";

const App = () => {
  const [begin, setBegin] = useState(false);
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* <Game /> */}
      {/* <Card /> */}
      {begin ? <Game /> : <Content setBegin={setBegin} />}
      {/* <Content /> */}
      <Footer />
    </div>
  );
};

export default App;
