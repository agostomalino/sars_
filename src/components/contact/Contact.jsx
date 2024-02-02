import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Contact.module.css';

const Contact = (props) => {
    return (
        <section className={classes.container_contacto}>
            <h3 className={classes.title}>Comunicate con nosotros.</h3>
            <ul>
                <li className='list'><p className={classes.list_text}>telefono</p></li>
                <li className='list'><p className={classes.list_text}>juan@mmasesores.com.ar</p></li>
                <li className='list'><p className={classes.list_text}>Córdoba, Argentina</p></li>
            </ul>
            <ul>
                <li><p className={classes.list_text}>Whatsapp</p></li>
                <li><p className={classes.list_text}>asesorsars@sars.com</p></li>
            </ul>
        </section>
    )
}

export default Contact