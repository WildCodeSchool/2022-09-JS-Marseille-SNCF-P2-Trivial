import React, {useState} from 'react';
//import Header from './Components/Header';
//import Nav from './Components/Nav';
//import Container from './Components/Container';
import Game from './Components/Game';
import Footer from './Components/Footer';
import './App.css';
import axios from 'axios';

const App =() => {
  return (
    <div className="App">
      <Game />
      <Footer/>
    </div>
  );
}

export default App;
