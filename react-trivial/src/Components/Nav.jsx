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
                placeholder='Enter your pseudo' 
                value={username} 
                onChange={handleUser}/>
                <label id='difficulties' htmlFor="difficulties"><strong>Difficulty</strong></label>
                <select name="choiceOfDifficulty" id="choice">
                    <option value disabled selected>---- Your choice ----</option>
                    <option value="text">Easy</option>
                    <option value="text">Medium</option>
                    <option value="text">Hard</option>
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
                placeholder='Enter your email' 
                value={usermail} 
                onChange={handleMail}
                required />
            <div className='acceptCGU'>
                <input 
                type="checkbox" 
                id='cgu' 
                name='cgu'
                required />
                <label htmlFor='cgu'>Accept our terms and conditions</label>
            </div>
                <p><em>Service reserved for adults with the legal capacity to contract</em></p>
                {isShowing ? <NavModal setIsShowing={setIsShowing} /> : <button className='subscribe' type='submit' onClick={toggleModal}>I subscribe</button>}
            </form>
            </nav>

        </nav>
    )
}

export default Nav;