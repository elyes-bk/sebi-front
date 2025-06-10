//composant 

import '../assets/styles/game.css';
import { Link } from 'react-router-dom';

function Game(props){

    return(
        <div className="game-container">
            
            <Link to={props.lien}>
                <img 
                    className="game-image"
                    src={props.img} 
                    alt={props.gameName} 
                    style={{ cursor: 'pointer' }}

                />
            </Link>
            <p className="game-name">{props.gameName}</p>
        </div>
    )
}
export default Game;