import '../../../assets/styles/pages/form/form-login.css';
import Sebi from './../../Sebi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const login_env = process.env.REACT_APP_LOG;

        try {
            const response = await fetch(login_env, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            });

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage(data.error || 'Erreur inconnue');
                return;
            }

            // Connexion réussie
            console.log('Connexion réussie !', data);
            setErrorMessage('Connexion réussie !');  
            login(data.token)
            navigate('/')                     
            
            // Ici vous pouvez rediriger l'utilisateur ou stocker son token
            
        } catch (error) {
            console.error('Erreur:', error);
            setErrorMessage('Erreur de connexion au serveur');
        }
    };

    return (
        <div className='form-login'>
            
            <Sebi text="Contente de te revoir !"/>
           
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="form-title">CONNEXION</h2>
                
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                
                <label htmlFor="email">E-mail:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={inputs.email}
                    onChange={handleChange}
                    required 
                />
                
                <label htmlFor="password">Mot de passe</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={inputs.password}
                    onChange={handleChange}
                    required 
                />
                
                <button type="submit" className="login-button">Connexion</button>
            </form>
        </div>
    );
}

export default Login;


