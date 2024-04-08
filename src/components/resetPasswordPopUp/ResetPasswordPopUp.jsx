import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from './ResetPasswordPopUp.module.css';

const ResetPasswordPopUp = ({ handleClose, show }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleResetClick = () => {
        if (!email) {
            console.log("e-mail is empty");
            return;
        }
        // axios.post('http://34.176.123.248/api/auth/forgot-password', {
        //     email: email
        // }).then(response => {
        //     console.log(response)
        //     navigate('/login');
        // })
        //     .catch(error => {
        //         console.log('An error occurred:', error.response);
        //     });

        handleClose();
    };

    return (
        <div>
            {show && <div className={classes.backdrop}></div>} {/* Fondo oscuro */}
            <div className={show ? classes.displayBlock : classes.displayNone}>
                <section className={classes.modalMain}>
                    <h2 className={classes.title}>Recuperar tus datos</h2>
                    <p className={classes.data}>Recibirás un correo con tu nueva contraseña.</p>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={classes.containerBtns}>
                        <button onClick={handleResetClick} className={classes.btnRestablecer}>Restablecer Contraseña</button>
                        <button onClick={handleClose} className={classes.btnCerrar}>Cerrar</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ResetPasswordPopUp;