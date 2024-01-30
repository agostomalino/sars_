import React from 'react';
import classes from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Card = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardHeader}>
                <FontAwesomeIcon icon={props.icon} className={classes.icon} />
                <h3 className={classes.title}>{props.title}</h3>
            </div>
            <p className={classes.text}>{props.description}</p>
        </div>
    )
}

export default Card;