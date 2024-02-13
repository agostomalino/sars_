import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import WhatsappLink from '../whatsapp/WhatsappLink';

import classes from './Contact.module.css';

const Contact = (props) => {


    return (
        <section className={classes.container_contacto}>
            <h3 className={classes.title}>Comunicate con nosotros.</h3>
            <ul>
                <li className='list'><FontAwesomeIcon icon={faWhatsapp} /> <WhatsappLink  phoneNumber="3516602437" message="¡Hola! Quiero realizarte una consulta sobre ..." /></li>
                <li className='list'><FontAwesomeIcon icon={faEnvelope} /><p className={classes.list_text}>juan@mmasesores.com.ar</p></li>
                <li className='list'><FontAwesomeIcon icon={faLocationDot} /><p className={classes.list_text}>Córdoba, Argentina</p></li>
            </ul>
            {/* <ul>
                <li><p className={classes.list_text}>Whatsapp</p></li>
                <li><p className={classes.list_text}>asesorsars@sars.com</p></li>
            </ul> */}
        </section>
    )
}

export default Contact