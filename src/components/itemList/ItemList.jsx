import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CommentsPopUp from '../commentsPopUp/commentsPopUp';
import classes from './ItemList.module.css';

const ItemList = ({ items, onItemClick, username }) => {
    const [showMessagePopup, setShowCommentsPopUp] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleMessageClick = (event, item) => {
        event.stopPropagation();
        setSelectedItem(item);
        setShowCommentsPopUp(true);
    };

    return (
        <div className={classes.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del reclamante</th>
                        <th>Fecha</th>
                        <th>Patente del reclamado</th>
                        <th>Compañía a reclamar</th>
                        <th>Monto</th>
                        <th>Estado</th>
                        <th>Descargar</th>
                        <th>Modificar</th>
                        <th>Comentarios</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} onClick={() => onItemClick(item)}>
                            <td>{item.id}</td>
                            <td>{item.claimers.find(claimer => true).name}</td>
                            <td>{item.date}</td>
                            <td>{item.claimantVehicle.plate}</td>
                            <td>{item.claimantVehicle.insuranceCompany}</td>
                            <td>{item.damageAmount}</td>
                            <td>{item.state}</td>
                            <td>
                                <button className={classes.actionButton}>

                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className="action-icon" />
                                </button>
                            </td>
                            <td>
                                <button className={classes.actionButton}>

                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="action-icon" />
                                </button>
                            </td>
                            <td>
                                <button className={classes.actionButton}>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="action-icon"
                                        onClick={(event) => handleMessageClick(event, item)}
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showMessagePopup && (<CommentsPopUp selectedComplaint={selectedItem} setShowCommentsPopUp={setShowCommentsPopUp} />
            )}
        </div>
    );
};

export default ItemList;