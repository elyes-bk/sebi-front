import '../../assets/styles/pages/home.css';
import ListGames from '../ListGames'
import Sebi from '../Sebi'

function Home() {
    return (
        <div className='home'>
            <Sebi text="Bienvenue dans le monde de Sebi la gazelle ! Partons ensemble à l'aventure !"/>
            <div className='list-games'>
                <ListGames/>
            </div>
        </div>
    )
}

export default Home;