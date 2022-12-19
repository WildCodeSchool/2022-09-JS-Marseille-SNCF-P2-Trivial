import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import "./App.css";
import Game from './Components/Game';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Game />
      <Footer/>
    </div>
  );
};

export default App;