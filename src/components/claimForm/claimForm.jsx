import React, { useState } from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import TabSiniestro from './claimFormTabs/tabSiniestro/tabSiniestro';
import TabReclamante from './claimFormTabs/tabReclamante/tabReclamante';
import TabReclamado from './claimFormTabs/tabReclamado/tabReclamado';
import TabVehiculoTercero from './claimFormTabs/tabVehiculoTercero/tabVehiculoTercero';
import TabVehiculo from './claimFormTabs/tabVehiculo/tabVehiculo';
import classes from './claimForm.module.css';

const ClaimForm = () => {
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
            {selectedItemId === 1 && <TabSiniestro/>}
            {selectedItemId === 2 && <TabReclamante />}
            {selectedItemId === 3 && <TabVehiculo/>}
            {selectedItemId === 4 && <TabReclamado/>}
            {selectedItemId === 5 && <TabVehiculoTercero/>}
        </div>
    );
}

export default ClaimForm;