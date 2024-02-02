import React, { useState } from 'react';
import classes from './LogIn.module.css';
import Popup from '../popUp/PopUp';  
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario:', username, 'Contraseña:', password);
        setUsername('');
        setPassword('');
    };

    const handleForgotPasswordClick = () => {
        // Mostrar el modal cuando se hace clic en "¿Olvidaste tu contraseña?"
        setShowModal(true);
    };

    const handleCloseModal = () => {
        // Cerrar el modal
        setShowModal(false);
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

                        <Link to="#" className={classes.recuperar} onClick={handleForgotPasswordClick}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                        <button type="submit" className={classes.btn}>
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>

            {showModal && (
                <Popup handleClose={handleCloseModal} show={showModal}></Popup>
            )}
        </div>
    );
};

export default LogIn;

