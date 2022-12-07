import React, {useState} from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './App.css';
import axios from 'axios';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Nav />
      <Footer/>
    </div>
  );
}

export default App;
