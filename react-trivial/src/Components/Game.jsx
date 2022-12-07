import React, {useState} from "react";
import axios from 'axios';


function Game() {
    const [game, setGame] = useState();

const getGame = () =>
    axios
    .get('https://opentdb.com/api.php?amount=10')
    .then((response) => response.data)
    .then((data) => {
        console.log(data);
        setGame(data.results[0]);
    });

    return

    
}

export default Game;