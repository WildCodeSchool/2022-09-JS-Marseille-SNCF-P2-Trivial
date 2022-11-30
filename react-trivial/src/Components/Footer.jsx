import React from 'react';
import './Footer.css';


const Footer = () => {
    return(
    <div className='footcontent'>
        <button className='Accueil'>Accueil</button>
        <button className='Contact'>Nous contacter</button>  
        <button className='Réseaux'>Nous suivre</button>
        <img className='Facebook'src="" alt="" />
            <img className='Instagram' src="" alt="" />
            <img className='Twitter' src="" alt="" />
        <ul className='categories'>
            <li>Sport</li>
            <li>Musique</li>
            <li>Jeux Videos</li>
            <li>Ordinateurs</li>
            <li>Geographie</li>
            <li>Film/Tv</li>
            <li>Manga</li>
            <li>Mythologie</li>
            <li>Choix Aleatoire</li>
        </ul>
        <p className='Copyright'>Copyright 2022-Tous droits réservés</p>   
    </div>
    
)
}
export default Footer;