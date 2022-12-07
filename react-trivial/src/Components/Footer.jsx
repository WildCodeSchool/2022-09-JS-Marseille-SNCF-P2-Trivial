import React from 'react';
import './Footer.css';
import image1 from '../Images/facebook.png';
import image2 from '../Images/instagram.png';
import image3 from '../Images/linkedin.png';
import image4 from '../Images/twitter.png';
import image5 from '../Images/tiktok2.png';

function Footer() {
        return(
            <div className='footcontent'>               
                <div className='categories'>
                    <a href='Accueil'>Accueil</a>
                    <a href='Categories'>Catégories</a> 
                    <a href='Contact'>Contact</a>   
                </div>
                    <ul className='firstline'>
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
                <div className="imgsoc"> 
                    <img className='logface' src={image1} alt="logo facebook" />
                    <img className='loginst' src={image2} alt="logo instagram" />
                    <img className='loglink' src={image3} alt="logo linkedin" />
                    <img className='logtwit' src={image4} alt="logo twitter" />
                    <img className='logtiktok' src={image5} alt="logo tiktok" />
                    <p className='Copyright'>Copyright2022.Tousdroitsréservés</p>
                        
                </div>
             </div>                   
        );
    }
export default Footer;