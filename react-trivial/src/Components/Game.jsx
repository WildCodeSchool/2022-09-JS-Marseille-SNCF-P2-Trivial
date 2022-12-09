import React, {useState} from 'react';
import GameHeader from './GameHeader';
import CounterTime from './CounterTime';
import './Game.css';
import axios from 'axios';

const sampleGame = {
    question: 'Quelle est la capitale de la France ?'
};

function Game() {
    const [game, setGame] = useState(sampleGame);
console.log(game);
const getGame = () => {
    axios
    .get('https://opentdb.com/api.php?amount=10')
    .then((response) => response.data)
    .then((data) => {
        console.log(data);
        setGame(data.results[0]);
    });
};

    return (
        <section className='sectionGame'>
        <article className='game'>
          <div className= 'gameHeader'>
            <h2>Quelle est la capitale de la France ?</h2>
          </div>   
          <div className='gameContent'>
            <button className='reponse'>
                <h2>Berlin</h2>
            </button>
            <button className='reponse'>
                <h2>Bucarest</h2>
            </button>
            <button className='reponse'>
                <h2>Paris</h2>
            </button>
            <button className='reponse'>
                <h2>Rome</h2>
            </button>
          </div>
        </article>
        <article className='counter'>
            <div className='counterQuestion'>
                <h1>Question</h1>
                <h2>1/10</h2>
            </div>
            <div className='counterTime'>
                <h1>Temps restant</h1>
                <h2><CounterTime /></h2>
            </div>
        </article>
        </section>
    );
}

export default Game;

