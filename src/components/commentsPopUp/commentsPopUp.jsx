import React, { useState } from 'react';
import classes from './commentsPopUp.module.css';

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
                    <h2>Comentarios reclamo #{selectedComplaint.id}</h2>
                    <div className={classes.dataHeader}>
                        <p><span>Nombre:</span> {selectedComplaint.name}</p>
                        <p><span>Patente:</span> {selectedComplaint.plate}</p>
                        <p><span>Estado:</span> {selectedComplaint.state}</p>
                    </div>
                </div>

                <div>
                    {comments.length > 0 ? (
                        <ul>
                            {comments.map((comment, index) => (
                                <li key={index} className={classes.coment}>
                                    <p><strong>{comment.user}:</strong> {comment.text}</p>
                                    <p>{comment.date}</p>
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
                <div className={classes.popUpFooter}>
                    <button onClick={handleCloseCommentsPopup}>Cerrar</button>
                </div>
            </div>

        </div>
    );
}

export default CommentsPopUp;