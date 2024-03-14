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
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Patente del Reclamado</th>
                        <th>Compañía a reclamar</th>
                        <th>Monto</th>
                        <th>Estado</th>
                        <th className={classes.centered}>Descargar</th>
                        <th className={classes.centered}>Modificar</th>
                        <th className={classes.centered}>Comentarios</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} onClick={() => onItemClick(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.plate}</td>
                            <td>{item.company}</td>
                            <td>{item.amount}</td>
                            <td>{item.state}</td>
                            <td className={classes.icon}>
                                <FontAwesomeIcon
                                    icon={faDownload}
                                    className="action-icon" />
                            </td>
                            <td className={classes.icon}>
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="action-icon" />
                            </td>
                            <td className={classes.icon}>
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="action-icon"
                                    onClick={(event) => handleMessageClick(event, item)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showMessagePopup && (<CommentsPopUp selectedComplaint={selectedItem} setShowCommentsPopUp={setShowCommentsPopUp} username={username} />
            )}
        </div>
    );
};

export default ItemList;