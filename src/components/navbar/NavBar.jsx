import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.headerLeft}>
                <Link to="/" className={classes.logo}><h1 className='logo-h'>SACS</h1></Link>
            </div>
            <div className={classes.headerRight}>
                <Link to="/" className={classes.btn}>Iniciar Sesion</Link>
            </div>
        </header>
    )
}

export default NavBar