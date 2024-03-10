import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
    const [buttonText, setButtonText] = useState('Iniciar sesión');
    const [route, setRoute] = useState('/');
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        let newText = '';

        switch (currentPath) {
            case '/':
                newText = 'Iniciar sesión';
                setRoute('/sars_/log-in');
                break;
            case '/listado':
                newText = 'Nuevo Reclamo';
                setRoute('/sars_/formulario');
                break;
            default:
                newText = 'Inicio';
                setRoute('/');
                break;
        }

        setButtonText(newText);
    }, [location.pathname]);

    const handleButtonClick = () => {
        // Redirige al usuario a la ruta específica
        window.location.href = route;
    }

    return (
        <header className={classes.header}>
            <div className={classes.headerLeft}>
                <Link to="/" className={classes.logo}><h1 className='logo-h'>SACS</h1></Link>
            </div>
            <div className={classes.headerRight}>
                <button className={classes.btn} onClick={handleButtonClick}>{buttonText}</button>
            </div>
        </header>
    )
}

export default NavBar;