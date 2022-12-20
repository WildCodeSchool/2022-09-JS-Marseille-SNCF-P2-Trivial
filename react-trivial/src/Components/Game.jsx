import React, {useState, useEffect} from 'react';
import GameApi from './GameApi';
import CounterTime from './CounterTime';
import axios from 'axios';

function Game() {
    const [game, setGame] = useState([]);
    
const getGame = () => {
    axios
    .get('https://opentdb.com/api.php?amount=10&type=multiple')
    .then((response) => response.data)
    .then((data) => {
        //console.log(data);
        setGame(data.results[0]);
    });
};

useEffect(() => {
    getGame()
}, []);

//console.log(game, "ici");

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

