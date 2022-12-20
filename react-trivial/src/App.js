import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Game from './Components/Game';
import Footer from './Components/Footer';
import "./App.css";

const App = ({selectCategory, setSelectCategory}) => {

/*const [start, setStart] = useState(false);
let departure = <div/>;
 if (start(false)) {
  departure = <Content selectCategory={selectCategory}
                      setSelectCategory={setSelectCategory} />
 } if (start(true)) {
  departure = <Game />
 }*/

  return (
    <div className="App">
      <Header />
      <Nav />
      {/*<Content />*/}
      <Game/>
      <Footer/>
    </div>
  );
};

export default App;