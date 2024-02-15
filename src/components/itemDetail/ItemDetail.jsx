import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>Fecha: {item.fecha}</p>
            <p>Patente: {item.patente}</p>
            <p>Compañía: {item.compañia}</p>
            <p>Monto: {item.monto}</p>
            <p>Estado: {item.estado}</p>
        </div>
    );
};

export default ItemDetail;