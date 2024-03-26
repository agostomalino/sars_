import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
    const userRole = localStorage.getItem('userRole')
    const [buttonText, setButtonText] = useState('Iniciar sesión');
    const [route, setRoute] = useState('/');
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        let buttonText = '';

        switch (currentPath) {
            case '/':
                buttonText = 'Iniciar sesión';
                setRoute('/log-in');
                break;
            case '/listado':
                buttonText = 'Nuevo Reclamo';
                setRoute('/formulario');
                break;
            default:
                newText = 'Inicio';
                setRoute('/sars_/');
                break;
        }

        setButtonText(buttonText);
    }, [location.pathname]);

    const handleButtonClick = () => {
        // Redirige al usuario a la ruta específica
        window.location.href = route;
    }

    const showActionButton = (userRole === 'Administrator' || userRole === 'Handler') ? false : true;

    return (
        <header className={classes.header}>
            <div className={classes.headerLeft}>
                <Link to="/" className={classes.logo}><h1 className='logo-h'>SACS</h1></Link>
            </div>
            <div className={classes.headerRight}>
                {showActionButton && <button className={classes.btn} onClick={handleButtonClick}>{buttonText}</button>}
            </div>
        </header>
    )
}

export default NavBar;