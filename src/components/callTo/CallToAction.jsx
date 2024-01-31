import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CallToAction.module.css';

const CallToAction = () => {
    return (

        <article className={classes.cta}>
            <div>
                <h2 className={classes.title}>Ingresá a la plataforma</h2>
                <ul>
                    <li><p className={classes.p}>Creá y administrá los reclamos de siniestros viales.</p></li>
                </ul>
            </div>
            <div className={classes.line}></div>
            <Link to="/" className={classes.btn}>Iniciar Sesion</Link>
        </article>

    )
}

export default CallToAction