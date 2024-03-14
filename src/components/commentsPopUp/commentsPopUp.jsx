import React, { useState, useEffect } from 'react';
import classes from './commentsPopUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CommentsPopUp = ({ selectedComplaint, setShowCommentsPopUp, username }) => {
    const [currentComment, setCurrentComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`http://34.176.123.248/api/claims/${selectedComplaint.id}?populate=comments`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComments(data.data.attributes.comments.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    });

    const handleCloseCommentsPopup = () => {
        setShowCommentsPopUp(false);
    };

    const handleCommentChange = (event) => {
        setCurrentComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (currentComment.trim() !== '') {
            const newComment = { text: currentComment, date: new Date().toLocaleString(), user: username };
            setComments([...comments, newComment]);
            setCurrentComment('');
        }
    };

    return (
        <div>
            <div className={classes.transparentBackdrop}></div>
            <div className={`${classes.messagePopup} ${classes.popupStyles}`}>
                <div className={classes.popUpHeader}>
                    <div className={classes.headerMain}>
                        <h2 className={classes.headerTitle}>Comentarios reclamo #{selectedComplaint.id}</h2>
                        <button
                            className={classes.cerrar}
                            onClick={handleCloseCommentsPopup}>
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </button>
                    </div>
                    <div className={classes.dataHeader}>
                        <p><span>Nombre del reclamante:</span> {selectedComplaint.claimers.find(claimer => true).name}</p>
                        <p><span>Patente del reclamado:</span> {selectedComplaint.claimantVehicle.plate}</p>
                        <p><span>Estado:</span> {selectedComplaint.state}</p>
                    </div>
                </div>

                <div>
                    {comments.length > 0 ? (
                        <ul className={classes.listaComments}>
                            {comments.map((comment, index) => (
                                <li key={index} className={classes.coment}>
                                    <p><strong className={classes.username}>{comment.attributes.username}:</strong></p>
                                    <p>{comment.attributes.message}</p>
                                    <p className={classes.date}>{formatDate(comment.attributes.createdAt)}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={classes.noComments}>No hay comentarios aún.</p>
                    )}
                </div>
                <form onSubmit={handleCommentSubmit}>
                    <textarea
                        placeholder="Escribe tu comentario aquí..."
                        value={currentComment}
                        onChange={handleCommentChange}
                        className={classes.commentTextArea}
                    />
                    <button type="submit" className={classes.btnComment}>Enviar</button>
                </form>
            </div>

        </div>
    );
}

export default CommentsPopUp;

// Para mostrar la fecha en un formato mas lindo
function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('es-AR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    });
    const time = date.toLocaleTimeString([], { hour12: false });
    return `${formattedDate} | ${time}`;
  }