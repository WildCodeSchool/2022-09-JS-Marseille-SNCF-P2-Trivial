import React, {useState} from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Card from './Components/Card';
import Footer from './Components/Footer';
import './App.css';
import axios from 'axios';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='startContent'>
      <Nav />
      <Card />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
