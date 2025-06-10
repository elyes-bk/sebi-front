import '../../assets/styles/pages/legal.css';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <section className="mentions-legales">
      <div className="container">
        <h1>Mentions légales</h1>

        <p><strong>Nom du site :</strong> Sebi La Gazelle</p>
        <p><strong>Éditeur :</strong> Charly, Mathilde, Amina, Elyes</p>
        <p><strong>Adresse :</strong> 123 rue des Jeux, 75000 Paris, France</p>
        <p><strong>Email :</strong> contact@monjeu-educatif.fr</p>

        <h2>Hébergement</h2>
        <p><strong>Hébergeur :</strong> o2switch</p>
        <p><strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France</p>
        <p className='hebergeur'><strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noreferrer">www.o2switch.fr</a></p>

        <h2>Propriété intellectuelle</h2>
        <p>Les contenus (textes, jeux, images, sons) présents sur ce site sont la propriété exclusive de l’éditeur. Toute reproduction ou utilisation sans autorisation est interdite.</p>

        <h2>Cookies</h2>
        <p>Ce site peut utiliser des cookies à des fins de statistiques anonymes ou de bon fonctionnement. En continuant la navigation, vous acceptez leur utilisation.</p>

        <h2>Données personnelles</h2>
        <p>Les données collectées (pseudo, score) sont utilisées uniquement pour le classement dans les jeux et ne sont jamais transmises à des tiers.</p>

        <Link to="/" className="back-home">← Retour au jeu</Link>
      </div>
    </section>
  );
};

export default MentionsLegales;
