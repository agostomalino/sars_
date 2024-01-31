import React,{useState} from 'react';
import classes from './LogIn.module.css';
import { Link } from 'react-router-dom';

const LogIn = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Usuario:', username, 'Contraseña:', password);

        setUsername('');
        setPassword('');
    };
    
    return (
            <div className={classes.container}>
                <div className={classes.box}>
                    <h2 className={classes.title}>Iniciar Sesión.</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className={classes.boxData}>
                                <label>Usuario:</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <br />
                            <div className={classes.boxData}>
                                <label>Contraseña:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <br />
                        <div>
                            <Link to="/" className={classes.recuperar}>¿Olvidaste tu contraseña?</Link>
                            <button type="submit" className={classes.btn}>Iniciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default LogIn