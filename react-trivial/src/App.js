import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Content from './Components/Content';
// import Game from './Components/Game';
//import Container from './Components/Container';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      {/* <Game /> */}
      {/* <Card /> */}
      <Content />
      <Footer/>
    </div>
  );
}

export default App;