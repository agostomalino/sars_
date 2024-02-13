import React from 'react';
import classes from '../contact/Contact.module.css';

const WhatsappLink = ({ phoneNumber, message }) => {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const whatsappLink = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;

    const estilo = {
      color: '#000000'
    };

    return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={estilo} className={classes.list_text}>
        Escribinos por WhatsApp
    </a>
    );
};

export default WhatsappLink;