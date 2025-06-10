import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles/sebi.css';
import eyesOpened from '../assets/images/mascotte_head_open_eyes.png';
import eyesClosed from '../assets/images/mascotte_head_eyes_closed.png';
import body1 from '../assets/images/mascotte_body_1.png';
import body2 from '../assets/images/mascotte_body_2.png';

const SebiAnimation = ({ text })  => {
  const [headSrc, setHeadSrc] = useState(eyesOpened);
  const [bodySrc, setBodySrc] = useState(body1);
  const [headRotation, setHeadRotation] = useState(0);
  const headRef = useRef(null);
  const bodyRef = useRef(null);
  const intervalRef = useRef(null);
  
  const animation = [
    eyesOpened,
    eyesClosed,
    body1,
    body2
  ];

  const startAnimation = () => {
    let i = 0;
    let j = 0;
    
    intervalRef.current = setInterval(() => {
      setHeadSrc(animation[1]);
      setHeadRotation(i % 2 === 0 ? 10 : -10);
      setBodySrc(j % 2 === 0 ? animation[2] : animation[3]);
      i++;
      j++;
    }, 400);
  };

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setHeadSrc(animation[0]);
      setBodySrc(animation[2]);
      setHeadRotation(0);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
     <div className="sebi">
        <p className='bubble speech'>{text}</p>
        <div id="container">
          <img
            ref={headRef}
            src={headSrc}
            alt="sebi la gazelle"
            id="head"
            style={{ transform: `rotate(${headRotation}deg)` }}
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
          />
          <img
            ref={bodyRef}
            src={bodySrc}
            alt="sebi la gazelle"
            id="body"
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
          />
        </div>
    </div>
  );
};

export default SebiAnimation;