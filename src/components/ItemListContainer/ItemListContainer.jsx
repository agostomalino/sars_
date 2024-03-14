import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import ItemDetail from '../itemDetail/ItemDetail';
import classes from './ItemListContainer.module.css';

const ItemListContainer = () => {
    const username = localStorage.getItem('username');
    const [selectedItem, setSelectedItem] = useState(null);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://34.176.123.248/api/claims?populate=claimers,claimants,claimantVehicle,claimerVehicle,comments', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const processedClaims = processClaims(data);
                console.log('ya procesados', processClaims(data))

                setItems(processedClaims);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleItemClick = item => {
        setSelectedItem(item);
    };

    return (
        <div className={classes.section}>
            <h4>Listado de Reclamos</h4>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h5>User: {username}</h5>
                    {selectedItem ? (
                        <ItemDetail item={selectedItem} />
                    ) : (
                        <ItemList items={items} onItemClick={handleItemClick} username={username} />
                    )}
                </>
            )}
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