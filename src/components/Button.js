// src/components/Button.js
import { Link } from 'react-router-dom';
import '../assets/styles/button.css';

function Button({ to, label, isHome, onClick }) {
  const className = isHome ? 'home-button' : 'buttons';
  const linkClass = isHome ? 'home-link' : 'button';

  // Si onClick est présent, c’est un bouton d’action (ex : Déconnexion)
  if (onClick) {
    return (
      <nav className={className}>
        <button className={linkClass} onClick={onClick}>
          {label}
        </button>
      </nav>
    );
  }

  // Sinon, c’est un lien de navigation normal
  return (
    <nav className={className}>
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    </nav>
  );
}

export default Button;
