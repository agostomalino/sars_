import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Breadcrumb.module.css';

const Breadcrumb = ({ items, onItemClick }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className={classes.breadcrumb}>
                {items.map((item) => (
                    <li key={item.id} className={classes.breadcrumbItem}>
                        <Link to="#" onClick={() => onItemClick(item.id)} className={classes.breadcrumbLink}>{item.text}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
