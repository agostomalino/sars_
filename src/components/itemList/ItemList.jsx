import React, { useState } from 'react';
import classes from './ItemList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({ items, onItemClick }) => {
    const [showMessagePopup, setShowMessagePopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleMessageClick = (event, item) => {
        event.stopPropagation(); 
        setSelectedItem(item);
        setShowMessagePopup(true);
    };

    const handleCloseMessagePopup = () => {
        setShowMessagePopup(false);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (comment.trim() !== '') {
            const newComment = { text: comment, date: new Date().toISOString() };
            setComments([...comments, newComment]);
            setComment('');
        }
    };

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
                        <th>Descargar</th>
                        <th>Modificar</th>
                        <th>Mensaje</th>
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
                            <td><FontAwesomeIcon icon={faDownload} className="action-icon" /></td>
                            <td><FontAwesomeIcon icon={faEdit} className="action-icon" /></td>
                            <td>
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

            {showMessagePopup && (
                <div>
                    <div className={classes.transparentBackdrop}></div>
                    <div className={`${classes.messagePopup} ${classes.popupStyles}`}>
                        <div className={classes.popUpHeader}>
                            <h2>{selectedItem.name}</h2>
                            <div className={classes.dataHeader}>
                                <p><span>Patente:</span> {selectedItem.patente}</p>
                                <p><span>ID:</span> {selectedItem.id}</p>
                                <p><span>Compañía:</span> {selectedItem.compañia}</p>
                            </div>
                        </div>

                        <div>
                            <h3>Comentarios:</h3>
                            {comments.length > 0 ? (
                                <ul>
                                    {comments.map((comment, index) => (
                                        <li key={index} className={classes.coment}>
                                            <p>{comment.text}</p>
                                            <p>{comment.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No hay comentarios aún.</p>
                            )}
                        </div>
                        <form onSubmit={handleCommentSubmit}>
                            <textarea
                                placeholder="Escribe tu comentario aquí..."
                                value={comment}
                                onChange={handleCommentChange}
                                className={classes.commentTextArea}
                            />
                            <button type="submit">Comentar</button>
                        </form>
                        <div className={classes.popUpFooter}>
                            <button onClick={handleCloseMessagePopup} className={classes.cerrar}>Cerrar</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default ItemList;