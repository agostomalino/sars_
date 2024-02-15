import React from 'react';
import classes from './ItemList.module.css';

const ItemList = ({ items, onItemClick }) => {
    return (
        <div className={classes.tableContainer}>
            <table>
            <thead className={classes.encabezado}>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Patente</th>
                <th>Compañía</th>
                <th>Monto</th>
                <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                <tr key={item.id} onClick={() => onItemClick(item)}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.fecha}</td>
                    <td>{item.patente}</td>
                    <td>{item.compañia}</td>
                    <td>{item.monto}</td>
                    <td>{item.estado}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default ItemList;