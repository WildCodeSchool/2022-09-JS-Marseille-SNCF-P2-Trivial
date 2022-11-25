import React, {useState} from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Container from './Components/Container';
import Footer from './Components/Footer';
import './App.css';
import axios from './axios';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
