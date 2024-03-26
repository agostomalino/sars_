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
        let route = '';
    
        switch (currentPath) {
            case '/':
                buttonText = 'Iniciar sesión';
                route = '/log-in';
                break;
            case '/listado':
                buttonText = 'Nuevo Reclamo';
                route = '/formulario';
                break;
            default:
                buttonText = 'Inicio';
                route = '/sars_/';
                break;
        }
    
        console.log('currentPath:', currentPath);
        console.log('buttonText:', buttonText);
        console.log('route:', route);
    
        setButtonText(buttonText);
        setRoute(route);
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
            <button className={classes.btn} style={{ display: 'block' }} onClick={handleButtonClick}>{buttonText}</button>
            </div>
        </header>
    )
}

export default NavBar;