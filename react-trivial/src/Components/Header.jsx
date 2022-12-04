import React from 'react';
import './Header.css';
import logo from '../images/imageonline-co-convertedpngimage-modified-removebg-preview-modified.png';
import point from '../images/Interrogação-PNG.png'
function Header () {

    return (
        <header className='myHeader'>
            <img className='headerLogo' alt='logo' src={logo} />
            <h1 className='headerTitle'>TRIVIAL Game</h1>
            <img className='headerPoint0' alt='Point0' src={point} />
            <img className='headerPoint' alt='Point' src={point} />
            <img className='headerPoint1' alt='Point1' src={point} />
            <img className='headerPoint2' alt='Point2' src={point} />
            <img className='headerPoint3' alt='Point3' src={point} />
        </header>
    )
}

export default Header;