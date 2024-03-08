import React, { useState } from 'react';
import classes from './commentsPopUp.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CommentsPopUp = ({ selectedComplaint, setShowCommentsPopUp, username }) => {
    const [currentComment, setCurrentComment] = useState('');
    const [comments, setComments] = useState(selectedComplaint.comments || []);

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
                                <FontAwesomeIcon icon={faTimes} size="2x"/>
                        </button>
                    </div>
                    <div className={classes.dataHeader}>
                        <p><span>Nombre:</span> {selectedComplaint.name}</p>
                        <p><span>Patente:</span> {selectedComplaint.plate}</p>
                        <p><span>Estado:</span> {selectedComplaint.state}</p>
                    </div>
                </div>

                <div>
                    {comments.length > 0 ? (
                        <ul className={classes.listaComments}>
                            {comments.map((comment, index) => (
                                <li key={index} className={classes.coment}>
                                    <p><strong className={classes.username}>{comment.user}:</strong></p>
                                    <p>{comment.text}</p>
                                    <p className={classes.date}>{comment.date}</p>
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
                {/*  */}
            </div>

        </div>
    );
}

export default CommentsPopUp;