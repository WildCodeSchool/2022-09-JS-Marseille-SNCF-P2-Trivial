import React from 'react';
import './Nav.css';

const NavModal = ({setIsShowing}) =>   {

    return (
        <div className='modal'>
            <div className='modalContent'>
            Thanks for joining. You will receive a confirmation email.
            </div>
            <button className='modalButton' onClick={() => setIsShowing(false)}>Close</button>
        </div>
    )

}

export default NavModal;
