import React, { useState } from 'react';
import classes from './LogIn.module.css';
import ResetPasswordPopUp from '../resetPasswordPopUp/ResetPasswordPopUp';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

const LogIn = () => {
    const apiUrl = config.apiUrl;

    const navigate = useNavigate();

    const [username, setUsername] = useState('juancruzmasjoan');
    const [password, setPassword] = useState('admin123');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            console.log("Username or password is empty");
            return;
        }
        axios.post(`${apiUrl}/api/auth/local`, {
            identifier: username,
            password: password
        }).then(response => {
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('token', response.data.jwt);
            navigate('/reclamos');
        })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
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
                <h2 className={classes.title}>Iniciar sesión</h2>
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
                        <p className={classes.sin_acceso}>Si no contás con acceso contactate con: <span className={classes.span}>juan@mmasesores.com.ar</span></p>
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
                <ResetPasswordPopUp handleClose={handleCloseModal} show={showModal}></ResetPasswordPopUp>
            )}
        </div>
    );
};

export default LogIn;

