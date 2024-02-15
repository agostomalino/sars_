import React, { useState } from 'react';
import classes from './PopUp.module.css';

const Popup = ({ handleClose, handleResetPassword, show }) => {
    const [email, setEmail] = useState('');

    const handleResetClick = () => {
        handleResetPassword(email);
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

export default Popup;