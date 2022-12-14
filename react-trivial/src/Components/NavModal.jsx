import React from 'react';
import './Nav.css';

const NavModal = ({setIsShowing}) =>   {

    return (
        <div className='modal'>
            <div className='modalContent'>
              Merci pour votre adhésion. 
              Vous allez recevoir un mail de confirmation.
            </div>
            <button className='modalButton' onClick={() => setIsShowing(false)}>Fermer</button>
        </div>
    )

}

export default NavModal;
