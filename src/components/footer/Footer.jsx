import React from 'react';
import classes from'./Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h6 className={classes.title}>SACS</h6>
            <p className={classes.copyright}>copyright</p>
        </footer>
    )
}

export default Footer