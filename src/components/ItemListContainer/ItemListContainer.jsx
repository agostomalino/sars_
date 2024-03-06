import React, { useState } from 'react';
import ItemList from '../itemList/ItemList';
import ItemDetail from '../itemDetail/ItemDetail';
import classes from './ItemListContainer.module.css';

const ItemListContainer = ({username}) => {
    
    const [selectedItem, setSelectedItem] = useState(null);
    const items = [
        { id: 1, name: 'Juan Cruz', date: '02/04/2020', plate:'vot 235' ,company: 'san cristobal', amount:5000, state: 'activo', 
            comments: [{ text: 'El reclamo se encuentra en proceso', date: '02/04/2020', user: 'Juan Cruz Masjoan'}]
        },
        { id: 2, name: 'Mateo', date: '02/04/2020', plate: 'npm 123' ,company: 'la caja', amount:24000, state: 'completo'},
        { id: 3, name: 'Agostina', date: '02/04/2020', plate: 'abc 456',company: 'sancor', amount:2000 , state: 'pendiente'},
        { id: 3, name: 'Pepito', date: '03/04/2020', plate: 'abc 789',company: 'sancor', amount:4000 , state: 'completo'}
    ];

    const handleItemClick = item => {
        setSelectedItem(item);
    };

    return (
        <div className={classes.section}>
            
            <h4>Listado de Reclamos</h4>
            {selectedItem ? (
                <ItemDetail item={selectedItem} />
            ) : (
                <ItemList items={items} onItemClick={handleItemClick} username={username}/>
            )}
        </div>
    );
};

export default ItemListContainer;