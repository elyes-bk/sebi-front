import React from 'react';
import '../../../assets/styles/jeux/james/choixNiveau.css';
import James from '../../../assets/images/james.webp';
import Sebi from '../../Sebi'
import { Link } from 'react-router-dom';
import RotatePhone from '../../../assets/images/rotate-phone.png';


function ChoixNiveau() {

    return (
        <section id="choixNiveau">
            <div className='landscape'>
                
                <div className='sebi-bloc'>
                    <Sebi text="Oh mais c'est mon ami James Le Hibou ! Viens avec moi et allons l'aider !"/>
                </div>

                <div id="select-game">
                    <p>Sélectionne ton niveau !</p>

                    <div id="btnBlock">
                        <Link to="/games/james/choix-du-niveau/facile">
                            <button className="btn">Facile</button>
                        </Link> 

                        <Link to="/games/james/choix-du-niveau/difficile">
                            <button className="btn">Difficile</button>
                        </Link>
                    </div>
                </div>
                   
                <div className='james-bloc'>
                    <img src={James} className="hiboux" alt="James le Hiboux"/>
                </div>
            </div>

            {/*demande de rotation en paysage*/}
            <div className='portrait'>
                <img className='rotate' src={RotatePhone} alt="Rotate your phone" />
                <p>Tourne ton écran</p>
            </div>

        </section>
    );
}

export default ChoixNiveau;
