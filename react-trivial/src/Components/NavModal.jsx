import React from 'react';
import './Nav.css';

const NavModal = ({setIsShowing}) =>   {

    return (
        <div className='navModal'>
            <div className='navModalContent'>
            Thanks for joining. You will receive a confirmation email.
            </div>
            <button className='navModalButton' onClick={() => setIsShowing(false)}>Close</button>
        </div>
    )

}

export default NavModal;
