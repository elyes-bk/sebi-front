import '../assets/styles/listGames.css'
import Game from './Game'
import SebiMiniaGame from '../assets/images/sebiMiniaGame.png'
import JamesMiniaGame from '../assets/images/jamesMiniaGame.png'


function ListGames(){
    return(
        <div className='containerGames'>
            <h2>Clique sur une des images pour accompagner Sebi</h2>
            <div className='games'>
                <Game 
                    lien='/games/james/choixNiveau' 
                    img={SebiMiniaGame} 
                    gameName="Le saut d'obstacle"
                />
                <Game 
                    lien='/games/james/choix-du-niveau' 
                    img={JamesMiniaGame} 
                    gameName="James le hibou"
                />
            </div>
        </div>
    )
}   

export default ListGames;