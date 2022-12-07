import React, {useState} from 'react';
import GameHeader from './GameHeader';
import axios from 'axios';

const sampleGame = {
    question: 'Quelle est la capitale de la France ?'
};

function Game() {
    const [game, setGame] = useState(sampleGame);

const getGame = () =>
    axios
    .get('https://opentdb.com/api.php?amount=10&encode=base64')
    .then((response) => response.data)
    .then((data) => {
        console.log(data);
        setGame(data.results[0]);
    });
console.log(GameHeader);
    return (
        <div className="Game">
          <div className= "Game-Header">
        <h2>question</h2>
        </div>   
        
        <button>Get question API</button>
        </div>
    );
}

export default Game;

