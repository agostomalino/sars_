import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CallToAction.module.css';

const CallToAction = () => {
    return (

        <article className={classes.cta}>
            <div className={classes.header_cta}>
                <h2 className={classes.title}>Ingresá a la plataforma.</h2>
                <ul>
                    <li><p className={classes.p}>Creá y administrá los reclamos de siniestros viales.</p></li>
                </ul>
            </div>
            <Link to="/login" className={classes.btn}>Iniciar sesión</Link>
        </article>

    )
}

export default CallToAction