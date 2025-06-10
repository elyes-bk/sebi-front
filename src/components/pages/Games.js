import '../../assets/styles/pages/games.css';
import Sebi from '../Sebi'
import ListGames from '../ListGames'

function GameList() {
    return (
        <div className='games-list'>
            <Sebi text="C'est parti pour de nouvelles aventures !"/>
            <div className='games-block'>
                <ListGames/> 
                <p className='text-games'>
                    Les <b>jeux</b> te rapportent des <b>points</b>.
                    Ces <b>points</b> te permettent de <b>gagner</b> des <b>images</b> et 
                    de les <b>ranger</b> dans ton <b>livre à images</b> disponible dans 
                    ton <b>profil</b>.
                </p>
            </div>
        </div>
    )
}

export default GameList;