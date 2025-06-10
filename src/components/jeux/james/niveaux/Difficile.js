import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../../assets/styles/jeux/james/level.css';
import RotatePhone from '../../../../assets/images/rotate-phone.png';
import Classement from '../../../Classement';
import James from '../../../James'

const JeuCalculInput = () => {
  const [score, setScore] = useState(0);
  const [pseudo] = useState("elyes");
  const [niveau, setNiveau] = useState(1);
  const [calcule, setCalcule] = useState('');
  const [bonneReponse, setBonneReponse] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [secondes, setSecondes] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const chronoRef = useRef(null);

  const maxTime = 30;

  useEffect(() => {
    genererCalcule();
  }, []);

  useEffect(() => {
    chronoRef.current = setInterval(() => {
      setSecondes(prev => {
        if (prev >= maxTime) {
          clearInterval(chronoRef.current);
          setMessage(bonneReponse);
          setTimeout(resetJeu, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(chronoRef.current);
  }, [calcule]);

  const calculNiveau = currentScore => {
    if (currentScore <= 5) return 1;
    if (currentScore <= 10) return 2;
    if (currentScore <= 15) return 3;
    if (currentScore <= 20) return 4;
    return 5;
  };

  const genererCalcule = () => {
    clearInterval(chronoRef.current);
    setSecondes(0);
    setMessage('');
    setUserInput('');

    let a, b, resultat, operation = '';
    const currentNiveau = calculNiveau(score);
    setNiveau(currentNiveau);

    switch (currentNiveau) {
      case 1:
        a = rand(0, 9);
        b = rand(0, 9);
        resultat = a + b;
        operation = `${a} + ${b} =`;
        break;
      case 2:
        a = rand(10, 100);
        b = rand(10, 100);
        resultat = a + b;
        operation = `${a} + ${b} =`;
        break;
      case 3:
        a = rand(0, 10);
        b = rand(0, a);
        resultat = a - b;
        operation = `${a} - ${b} =`;
        break;
      case 4:
        a = rand(0, 10);
        b = rand(0, 10);
        resultat = a * b;
        operation = `${a} x ${b} =`;
        break;
      case 5:
        [a, b, resultat] = genererDivision();
        operation = `${a} / ${b} =`;
        break;
      default:
        break;
    }

    setCalcule(operation);
    setBonneReponse(resultat);
  };

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const genererDivision = () => {
    const diviseurs = {
      10: [10,5,2,1], 9:[9,3,1], 8:[8,4,2], 7:[7,1],
      6:[6,3,1], 5:[5,1], 4:[4,2,1], 3:[3,1], 2:[2,1], 1:[1]
    };
    let a = rand(1, 10);
    let bList = diviseurs[a] || [1];
    let b = bList[Math.floor(Math.random() * bList.length)];
    return [a, b, a / b];
  };

  // Vérifie la réponse et gère le reset + envoi du score en cas d'erreur
  const checkAnswer = async () => {
    const rep = parseInt(userInput, 10);
    clearInterval(chronoRef.current);

    if (rep === bonneReponse) {
      setMessage(rep);
      setScore(prev => prev + 1);
    } else {
      setMessage(bonneReponse);
      await sendScore(pseudo, score);
      setScore(0);
    }

    setTimeout(resetJeu, 2000);
  };

  // Envoie le score au serveur
  const sendScore = async (pseudo, scoreFinal) => {
    try {
      const res = await fetch("http://localhost:8080/api/james/scores/difficile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pseudo, score: scoreFinal })
      });
      if (res.ok) {
        alert("score envoyé !");
      } else {
        alert("erreur lors de l'envoi du score");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const resetJeu = () => genererCalcule();

  return (
    <section id="level">
      <div className="landscape">
        <div className='top-bar'>
          <div className='trophy' 
              onClick={()=>{ setShowPopup(true) }}
          >
            <svg className="svgTrophy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="#390A03" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>                        
          </div>
          <div className="score-info">
            <span>Niveau {niveau}</span>
            <span>{score} pts</span>
          </div>
          <Classement level="facile" isOpen={showPopup} onClose={()=>setShowPopup(false)}/>
          <Link to="/games/james/choix-du-niveau">
              <svg className='cross' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
              </svg>
          </Link>
        </div>

        <div className="level">
          <div id="leftBlock">
            <James calcule={calcule} message={message}/>
          </div>

          <div id="rightBlock">
            <div id='blockResDifficile'>
              <input
                className="response"
                type="number"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
              />
              <button className="btn" onClick={checkAnswer}>Valider</button>
            </div>
          </div>
        </div>
        <div
          id="chrono"
          className={secondes >= maxTime - 2 ? 'warning' : ''}
          style={{ '--progress-width': `${(1 - secondes/maxTime) * 100}` }}
        >
          <span>{maxTime - secondes}</span>
        </div>
      </div>
      <div className="portrait">
        <img className="rotate" src={RotatePhone} alt="Rotate your phone" />
        <p>Tourne ton écran</p>
      </div>
    </section>
  );
};

export default JeuCalculInput;
