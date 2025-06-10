import '../assets/styles/navBar.css';
import Logo from '../assets/images/logo.png'
import Button from './Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';





function NavBar({links}){

    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const filteredLinks = links.filter(link => {
        if (isAuthenticated && (link.path === '/login' || link.path === '/signup')) {
        return false;
        }
        if (!isAuthenticated && link.path === '/logout') {
        return false;
        }
        return true;
    });

    return(
        <nav className='navbar'>
            <div className='logo'> 
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div> 
            <button className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                {/*barre menu burger*/}
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`btns ${isOpen ? 'active' : ''}`}>
                {filteredLinks.map((link,index)=>(
                    <div key={index}>
                        <Button
                            to={link.path} 
                            label={link.label}
                            isHome={link.path === '/'}
                        >
                        </Button>
                    </div>
                ))}
                {isAuthenticated && (
                    <div>
                    <Button
                    to="/"
                    label="Déconnexion"
                    onClick={logout}
                    />
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar