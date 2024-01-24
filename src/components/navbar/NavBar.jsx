import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <Link to="/" className='logo'><h1 className='logo-h'>SARS</h1></Link>
            </div>
            <div className='header-right'>
                <Link to="/" className='btn-nav'>Iniciar Sesion</Link>
            </div>
        </header>
    )
}

export default NavBar