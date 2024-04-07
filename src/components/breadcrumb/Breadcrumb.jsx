import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faCar } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos necesarios
import classes from './Breadcrumb.module.css';

const Breadcrumb = ({ items, onItemClick }) => {

    const iconMap = {
        'Datos del Siniestro': faMapMarkerAlt,
        'Reclamante': faUser,
        'Vehiculo del Reclamante': faCar,
        'Reclamado': faUser,
        'Vehiculo del Tercero': faCar
    };

    return (
        <nav aria-label="breadcrumb">
            <ol className={classes.breadcrumb}>
                {items.map((item) => (
                    <li key={item.id} className={classes.breadcrumbItem}>
                        <Link to="#" onClick={() => onItemClick(item.id)} className={classes.breadcrumbLink}>
                            <FontAwesomeIcon icon={iconMap[item.text]} className={classes.breadcrumbIcon} />
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;