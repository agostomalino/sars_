import React, { useState } from 'react';
import classes from './Formulario.module.css';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import FormSiniestro from '../forms/formSiniestro/FormSiniestro';
import FormReclamante from '../forms/formReclamante/FormReclamante';
import FormReclamado from '../forms/formReclamado/FormReclamado';
import FormTercero from '../forms/formTercero/FormTercero';
import FormVehiculo from '../forms/formVehiculo/FormVehiculo';

const Formulario = () => {
    const breadcrumbItems = [
        { text: 'Datos del Siniestro', id: 1 },
        { text: 'Reclamante', id: 2 },
        { text: 'Vehiculo del Reclamante', id: 3 },
        { text: 'Reclamado', id: 4 },
        { text: 'Vehiculo del Tercero', id: 5 }
    ];

    const [selectedItemId, setSelectedItemId] = useState(1);

    const handleBreadcrumbItemClick = (id) => {
        setSelectedItemId(id);
    };
    
    return (
        <div className={classes.mainContainer}>
            <Breadcrumb items={breadcrumbItems} onItemClick={handleBreadcrumbItemClick}/>
            {selectedItemId === 1 && <FormSiniestro/>}
            {selectedItemId === 2 && <FormReclamante />}
            {selectedItemId === 3 && <FormVehiculo/>}
            {selectedItemId === 4 && <FormReclamado/>}
            {selectedItemId === 5 && <FormTercero/>}
        </div>
    );
}

export default Formulario