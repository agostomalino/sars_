import React,{useState} from 'react';
import classes from './LogIn.module.css';

const LogIn = () => {

        // Estados para almacenar el nombre de usuario y la contraseña
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
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                    Usuario:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </label>
                    <br />
                    <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </label>
                    <br />
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
    )
}

export default LogIn