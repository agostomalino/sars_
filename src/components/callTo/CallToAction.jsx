import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CallToAction.module.css';

const CallToAction = () => {
    return (

        <article className={classes.cta}>
            <div>
                <h2 className={classes.title}>Completá el formulario.</h2>
                <ul>
                    <li><p className={classes.p}>Completa los datos del siniestro.</p></li>
                    <li><p className={classes.p}>Nuestros asesores lo analizarán y se comunicaran contigo.</p></li>
                </ul>
            </div>
            <div className={classes.line}></div>
            <Link to="/" className={classes.btn}>Iniciar Sesion</Link>
        </article>

    )
}

export default CallToAction