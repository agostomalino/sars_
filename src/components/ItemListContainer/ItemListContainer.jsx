import React, { useState } from 'react';
import ItemList from '../itemList/ItemList';
import ItemDetail from '../itemDetail/ItemDetail';
import classes from './ItemListContainer.module.css';

const ItemListContainer = () => {
    
    const [selectedItem, setSelectedItem] = useState(null);
    const items = [
        { id: 1, name: 'Juan Cruz', fecha: '02/04/2020', patente:'vot 235' ,compañia: 'san cristobal', monto:5000, estado: 'activo'},
        { id: 2, name: 'Mateo', fecha: '02/04/2020', patente: 'npm 123' ,compañia: 'la caja', monto:24000, estado: 'completo'},
        { id: 3, name: 'Agostina', fecha: '02/04/2020', patente: 'abc 456',compañia: 'sancor', monto:2000 , estado: 'pendiente'},
        { id: 3, name: 'Pepito', fecha: '03/04/2020', patente: 'abc 789',compañia: 'sancor', monto:4000 , estado: 'completo'}
    ];
    const username = 'NombreDeUsuario';

    const handleItemClick = item => {
        setSelectedItem(item);
    };

    return (
        <div className={classes.section}>
            
            <h4>Listado de Reclamos</h4>
            {selectedItem ? (
                <ItemDetail item={selectedItem} />
            ) : (
                <ItemList items={items} onItemClick={handleItemClick} user={username}/>
            )}
        </div>
    );
};

export default ItemListContainer;