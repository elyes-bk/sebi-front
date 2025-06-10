import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import FormSignUp from './components/pages/form/FormSignUp';
import Login from './components/pages/form/FormLogin';
import Games from './components/pages/Games';
import Profil from './components/pages/user-infos/Profil';
import Book from './components/pages/user-infos/Book';
import Footer from './components/Footer';
import './assets/styles/router.css'
import JamesGame from './components/jeux/james/ChoixNiveau'
import Facile from './components/jeux/james/niveaux/Facile';
import Difficile from './components/jeux/james/niveaux/Difficile';
import MentionsLegales from './components/pages/legal';
import Page404 from './components/pages/404';
import Page403 from './components/pages/403';



const HomeLogo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="40" width="40" ><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>


function Router() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },                
                { path: '/signup', label: 'Inscription' },
                {path: '/book', label: 'Galerie'}
              ]} />
              <main className='content'>
                <Home />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/signup', label: 'Inscription' },
                {path: '/book', label: 'Galerie'}

              ]} />
              <main className='content'>
                <Login />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                {path: '/book', label: 'Galerie'}

              ]} />
              <main className='content'>
                <FormSignUp />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/games"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux'},
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription' },
                {path: '/book', label: 'Galerie'}

              ]} />
              <main className='content'>
                <Games />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/book"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription' },
                //déconnexion
              ]} />
              <main className='content'>
                <Book />
              </main>
              <Footer/>
            </div>

          }
        />
        <Route
          path="/mentions-legales"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription'},
                {path: '/book', label: 'Galerie'}

              ]} />
              <main className=''>
                <MentionsLegales />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription'}
              ]} />
              <main className=''>
                <Page404 />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/403"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription'}
              ]} />
              <main className=''>
                <Page403 />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/games/james/choix-du-niveau"
          element={
            <div className='route'>
              <NavBar
                links={[
                  {path: '/', label: (
                    <Link to="/">{HomeLogo}</Link>
                  )},
                  {path: '/games', label: 'Les jeux'},
                  { path: '/login', label: 'Connexion' },
                  { path: '/signup', label: 'Inscription' }                
                ]}
              />
              <main className='content-game'>
                <JamesGame />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/games/james/choix-du-niveau/facile"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription' }
              ]} />
              <main className='content-game'>
                <Facile />
              </main>
              <Footer/>
            </div>
          }
        />
        <Route
          path="/games/james/choix-du-niveau/difficile"
          element={
            <div className='route'>
              <NavBar links={[
                { path: '/', label: (
                  <Link to="/">{HomeLogo}</Link>
                )},
                { path: '/games', label: 'Les jeux' },
                { path: '/login', label: 'Connexion' },
                { path: '/signup', label: 'Inscription' }
              ]} />
              <main className='content-game'>
                <Difficile />
              </main>
              <Footer/>
            </div>
          }
        />
        
      </Routes>
      
    );
}

export default Router;