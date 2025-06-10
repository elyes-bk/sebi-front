import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/pages/403.css'; 


function Page403() {
    return (
        <div className="page403">
                <div className="page403-message">
                    <h1>Oups !</h1>
                     <p className="page403-texte">Je crois que tu t'es égaré...</p>
                    <h2>403</h2>
                    <p className="page403-subtext">ACCÈS INTERDIT</p>
                </div>
                
        </div>
        
    );
}


export default Page403;
