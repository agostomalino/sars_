import React, { useState, useEffect, useMemo } from 'react';
import ClaimsList from '../claimList/claimList';
import config from '../../config';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import classes from './claimsListContainer.module.css';
import 'react-tabs/style/react-tabs.css'; // Estilos por defecto de react-tabs

const ClaimsListContainer = () => {
    const apiUrl = config.apiUrl;
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const estados = useMemo(() => [
        'Cargado',
        'Reclamo ingresado',
        'Instancia judicial',
        'Pendiente de liquidación',
        'A liquidar',
        'Finalizado',
        'Rechazado'
    ], []);

    const [items, setItems] = useState([]);
    const [isUserLoaded, setIsUserLoaded] = useState(false);
    const [areItemsLoaded, setAreItemsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    useEffect(() => {
        if (user && user.role && user.role.name === 'Agent') { //TODO: Improve this
            estados.unshift('Creado');
        }
    });

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`${apiUrl}/api/users/${userId}?populate=role`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            localStorage.setItem('userRole', data.role.name);

            setUser(data);
            setIsUserLoaded(true);
        }

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/claims?populate=claimers,claimants,claimantVehicle,claimerVehicle,comments,agent&filters[state][$eq]=${estados[selectedTabIndex]}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const processedClaims = processClaims(data);

                setItems(processedClaims);
                setAreItemsLoaded(true);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, [estados, selectedTabIndex, apiUrl, token]);

    return (
        <div className={classes.section}>
            <h4>Listado de reclamos</h4>
            {(isUserLoaded && areItemsLoaded) ?
                (
                    <>
                        <h5>User: {user && `${user.name} ${user.lastname}`}</h5>
                        <Tabs onSelect={(selectedIndex) => setSelectedTabIndex(selectedIndex)}>
                            <TabList defaultIndex={0} >
                                {estados.map((estado, index) => (
                                    <Tab key={index}>{estado}</Tab>
                                ))}
                            </TabList>
                            {estados.map((estado, index) => (
                                <TabPanel key={index}>
                                    <ClaimsList items={items} />
                                </TabPanel>
                            ))}
                        </Tabs>
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default ClaimsListContainer;

// Función para procesar los reclamos y dejarlos en un formato más manejable
const processClaims = (claims) => {
    return claims.data.map(item => ({
        ...item.attributes,
        id: item.id,
        claimers: item.attributes.claimers.data.map(claimer => ({
            id: claimer.id,
            ...claimer.attributes
        }))
        ,
        claimants: item.attributes.claimants.data.map(claimer => ({
            id: claimer.id,
            ...claimer.attributes
        }))
        ,
    }));
};