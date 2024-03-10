import React from 'react';
import classes from './Formulario.module.css';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Formulario = () => {
    const breadcrumbItems = [
        { text: 'Datos del Siniestro', url: '/siniestro' },
        { text: 'Reclamante', url: '/reclamante' },
        { text: 'Vehiculo del Reclamante', url: '/vehiculo' },
        { text: 'Reclamado', url: '/reclamado' },
        { text: 'Vehiculo del Tercero', url: '/tercero'}

    ];
    
    return (
        <>
            <div className={classes.mainContainer}>
                <Breadcrumb items={breadcrumbItems}/>

            </div>
        </>
    )
}

export default Formulario