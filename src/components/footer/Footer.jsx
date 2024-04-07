import React from 'react';
import classes from'./Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h6 className={classes.title}>SACS</h6>
            <p className={classes.copyright}>© 2024 SACS. Derechos reservados.</p>
        </footer>
    )
}

export default Footer