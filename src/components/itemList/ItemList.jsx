import React from 'react';
import classes from './ItemList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEdit } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({ items, onItemClick }) => {
    return (
        <div className={classes.tableContainer}>
            <table>
            <thead className={classes.encabezado}>
                <tr>
                <th className={classes.checkboxContainer}><input type="checkbox" className={classes.checkbox}/></th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Patente</th>
                <th>Compañía</th>
                <th>Monto</th>
                <th>Estado</th>
                <th>Descargar</th>
                <th>Modificar</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                <tr key={item.id} onClick={() => onItemClick(item)}>
                    <td className={classes.checkboxContainer}><input type="checkbox" className={classes.checkbox} /></td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.fecha}</td>
                    <td>{item.patente}</td>
                    <td>{item.compañia}</td>
                    <td>{item.monto}</td>
                    <td>{item.estado}</td>
                    <td><FontAwesomeIcon icon={faDownload} className="action-icon" /></td>
                    <td><FontAwesomeIcon icon={faEdit} className="action-icon" /></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

export default ItemList;