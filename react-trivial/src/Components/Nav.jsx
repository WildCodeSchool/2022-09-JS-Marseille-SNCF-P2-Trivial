import React, {useState} from 'react';
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

    function handleSubmit(e){
        e.preventDefault();
    }


    return (
        <nav className='myNav'>

            <nav className='myNav1'>
            <div className='infosUser'>
                <label htmlFor="pseudo"><strong>Pseudo</strong></label>
                <input 
                type='text' 
                name='Pseudo'
                id='Pseudo'
                placeholder='Entrer votre pseudo' 
                value={username} 
                onChange={handleUser}/>
                <label id='difficulties' htmlFor="difficulties"><strong>Difficulté</strong></label>
                <select name="choiceOfDifficulty" id="choice">
                    <option value disabled selected>---- Votre choix ----</option>
                    <option value="text">Facile</option>
                    <option value="text">Moyen</option>
                    <option value="text">Difficile</option>
                </select>
            </div>
            </nav>

            <nav className='myNav2'>
            <form className='newsLetter' onSubmit={handleSubmit}>
                <span><p><strong>NewsLetter</strong></p></span>
                <label htmlFor='email'></label>
                <input 
                type="email" 
                name='email'
                id='email'
                placeholder='Entrer votre email' 
                value={usermail} 
                onChange={handleMail}
                required />
            <div className='acceptCGU'>
                <input 
                type="checkbox" 
                id='cgu' 
                name='cgu'
                required />
                <label htmlFor='cgu'> Accepter nos CGU</label>
            </div>
                <p><em>Service réservé aux personnes majeures et ayant la capacité juridique de contracter</em></p>
                {isShowing ? <NavModal setIsShowing={setIsShowing} /> : <button className='subscribe' type='submit' onClick={toggleModal}>Je m'abonne</button>}
            </form>
            </nav>

        </nav>
    )
}

export default Nav;