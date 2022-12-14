import React, {useState, useEffect} from 'react';
import GameApi from './GameApi';
import axios from 'axios';
import CounterTime from './CounterTime';

function Game() {
    const [game, setGame] = useState([]);


/*function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str));
  } 
function UnicodeDecodeB64(str) {
    return decodeURIComponent(atob(str));
  }*/
const getGame = () => {
    axios
    .get('https://opentdb.com/api.php?amount=10&type=multiple')
    .then((response) => response.data)
    .then((data) => {
        console.log(data);
        setGame(data.results[0]);
    });
};

useEffect(() => {
    getGame()
}, []);

    return (
        <section className='Game'>
            <GameApi
                category={game.category}
                difficulty={game.difficulty}
                question={game.question}
                correct_answer={game.correct_answer}
                incorrect_answers={game.incorrect_answers}
            /> 
        </section>
    );
}

export default Game;

