import React, { useState } from 'react';
import classes from './PopUp.module.css';

const Popup = ({ handleClose, handleResetPassword, show, children }) => {
    const [email, setEmail] = useState('');

    const handleResetClick = () => {
        handleResetPassword(email);
        handleClose();
    };

    return (
        <div className={show ? classes.displayBlock : classes.displayNone}>
            <section className={classes.modalMain}>
                <h2 className={classes.title}>¿Olvidaste tu contraseña?</h2>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className={classes.containerBtns}>
                    <button onClick={handleResetClick} className={classes.btnRestablecer}>Restablecer Contraseña</button>
                    <button onClick={handleClose}className={classes.btnCerrar}>Cerrar</button>
                </div>
            </section>
        </div>
    );
};

export default Popup;