import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <Link to="/" className='logo'><h1>SARS</h1></Link>

            <Link to="/" className='btn-menu'>Iniciar Sesion</Link>

        </header>
    )
}

export default NavBar