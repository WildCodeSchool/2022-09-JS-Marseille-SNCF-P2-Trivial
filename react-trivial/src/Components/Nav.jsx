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
        <nav className='nav'>

            <nav className='nav1'>
            <form className='nav1User'>
                <div className='nav1User1'>
                <label htmlFor="Pseudo" className='nav1Pseudo'><strong>Pseudo</strong></label>
                <br/>
                <input 
                type='text' 
                name='Pseudo'
                id='nav1Pseudo'
                placeholder='Enter your pseudo' 
                value={username} 
                onChange={handleUser}
                required />
                <br/>
                </div>
                <div className='nav1User2'>
                <label htmlFor="difficulties" className='nav1Difficulties' ><strong>Difficulty</strong></label>
                <br/>
                <select name="choiceOfDifficulty" id="nav1Difficulties">
                    <option id='nav1Choice' value disabled selected>---- Your choice ----</option>
                    <option id='nav1Choice' value="text">Easy</option>
                    <option id='nav1Choice' value="text">Medium</option>
                    <option id='nav1Choice' value="text">Hard</option>
                </select>
                </div>
            </form>
            </nav>

            <nav className='nav2'>
            <form className='nav2Form' onSubmit={handleSubmit}>
                <label htmlFor='email' className='nav2NewsLetter'><strong>NewsLetter</strong></label>
                <br/>
                <input 
                type='email' 
                name='email'
                id='nav2NewsLetter'
                placeholder='Enter your email' 
                value={usermail} 
                onChange={handleMail}
                required />
            <div className='nav2Cgu'>
                <input 
                type="checkbox" 
                id='nav2Cgu' 
                name='cgu'
                required />
                <label  className='nav2Accept'> Accept our terms and conditions</label>
            </div>
                <p className='nav2Service'><em>Service reserved for adults with the legal capacity to contract</em></p>
                {isShowing ? <NavModal setIsShowing={setIsShowing} /> : <button className='nav2Subscribe' type='submit' onClick={toggleModal}>I subscribe</button>}
            </form>
            </nav>

        </nav>
    )
}

export default Nav;
