import React from 'react';
import classes from './Card.module.css';


const Card = () => {
    return (
        <div className={classes.card}>
            <h3 className={classes.title}>CARD TITLE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit quaerat dolores nobis quo sed temporibus nulla non? Quas natus maiores ducimus perferendis iusto quae, itaque non modi neque. Nisi.</p>
        </div>
    )
}

export default Card