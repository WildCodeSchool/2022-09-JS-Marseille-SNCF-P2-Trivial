import React, {createElement, useEffect, useState} from 'react';
import './Nav.css';
import NavModal from './NavModal'

function Nav () {

    const [username, setUsername] = useState("");
    function handleUser(e) {
        setUsername(e.target.value);
   };

    const [usermail, setUsermail] = useState("");
    function handleMail(e) {
        setUsermail(e.target.value);
    };

    const [isShowing, setIsShowing] = useState(false);
    function toggleModal() {
        setIsShowing(!isShowing);
    };


    return (
        <nav className='myNav'>

            <nav className='myNav1'>
            <div className='infosUser'>
                <label htmlFor="pseudo"><strong>Pseudo</strong></label>
                <input 
                type='text' 
                placeholder='Entrer votre pseudo' 
                value={username} 
                onChange={() => handleUser()}/>
                <label id='difficulties' htmlFor="difficulties"><strong>Difficulté Quizz</strong></label>
                <select name="choiceOfDifficulty" id="choice">
                    <option value disabled selected>---- Votre choix ----</option>
                    <option value="text">Facile</option>
                    <option value="text">Moyen</option>
                    <option value="text">Difficile</option>
                </select>
            </div>
            </nav>

            <nav className='myNav2'>
            <div className='newsLetter'>
                <span><p><strong>NewsLetter</strong></p></span>
                <input 
                type="email" 
                placeholder='Entrer votre email' 
                value={usermail} 
                onChange={() => handleMail()}
                required />
            <div className='acceptCGU'>
                <input 
                type="checkbox" 
                id='cgu' 
                name='cgu'
                required />
                <label htmlFor='cgu'> Accepter nos <a href=''>CGU</a></label>
            </div>
                <p><em>Service réservé aux personnes majeures et ayant la capacité juridique de contracter</em></p>
                {isShowing ? <NavModal setIsShowing={setIsShowing} /> : <button className='subscribe' onClick={() => toggleModal()}>Je m'abonne</button>}
            </div>
            </nav>

        </nav>
    )
}

export default Nav;
