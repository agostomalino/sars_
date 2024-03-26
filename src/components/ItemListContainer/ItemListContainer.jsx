import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import classes from './ItemListContainer.module.css';
import config from '../../config';

const ItemListContainer = () => {
    const apiUrl = config.apiUrl;
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const [items, setItems] = useState([]);
    const [isUserLoaded, setIsUserLoaded] = useState(false);
    const [areItemsLoaded, setAreItemsLoaded] = useState(false);
    const [user, setUser] = useState(null);

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

        const fetchItems = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/claims?populate=claimers,claimants,claimantVehicle,claimerVehicle,comments`, {
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

        fetchUser();
        fetchItems();
    }, []);

    return (
        <div className={classes.section}>
            <h4>Listado de Reclamos</h4>
            {(isUserLoaded && areItemsLoaded) ?
                (
                    <>
                        <h5>User: {user.name + user.lastname}</h5>
                        <ItemList items={items} />
                    </>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default ItemListContainer;

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