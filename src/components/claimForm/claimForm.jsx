import React, { useMemo } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabSiniestro from './claimFormTabs/tabSiniestro/tabSiniestro';
import TabReclamante from './claimFormTabs/tabReclamante/tabReclamante';
import TabReclamado from './claimFormTabs/tabReclamado/tabReclamado';
import TabVehiculoTercero from './claimFormTabs/tabVehiculoTercero/tabVehiculoTercero';
import TabVehiculo from './claimFormTabs/tabVehiculo/tabVehiculo';
import classes from './claimForm.module.css';

const ClaimForm = () => {
    const tabs = useMemo(() => [
        'Datos del Siniestro',
        'Reclamante',
        'Vehiculo del Reclamante',
        'Reclamado',
        'Vehiculo del Tercero'
    ], []);

    const renderTabContent = (index) => {
        switch (index) {
            case 0:
                return <TabSiniestro />;
            case 1:
                return <TabReclamante />;
            case 2:
                return <TabVehiculo />;
            case 3:
                return <TabReclamado />;
            case 4:
                return <TabVehiculoTercero />;
            default:
                return null;
        }
    };

    return (
        <div className={classes.mainContainer}>
            <Tabs>
                <TabList defaultIndex={0} >
                    {tabs.map((tab, index) => (
                        <Tab key={index}>{tab}</Tab>
                    ))}
                </TabList>
                {tabs.map((tab, index) => (
                    <TabPanel key={index}>
                        {renderTabContent(index)}
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
}

export default ClaimForm;