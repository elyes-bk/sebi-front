import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Classement.css';

const Classement = ({ level,isOpen, onClose }) => {
  const [classement, setClassement] = useState([]);

  const getScore = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/james/scores/${level}`);
      if (res.ok) {
        const data = await res.json();
        setClassement(data);
      } else {
        alert("Erreur de récupération");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isOpen) getScore();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="classement-popup">
        <button className="close-button" 
            onClick={()=>{
                console.log('fermeture demandé');
                onClose()
        }}>×</button>
        <h3>Classement</h3>
        <ul>
          {classement.map((score, index) => (
            <li key={score._id}>
              {index + 1}. {score.pseudo} – {score.score} pts
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Classement;
