import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className={classes.breadcrumb}>
                {items.map((item, index) => (
                <li key={index} className={index === items.length - 1 ? `classes.breadcrumbItem active` : `classes.breadcrumbItem`}>
                    {index === items.length - 1 ? (
                    item.text
                    ) : (
                    <Link to={item.url} className={classes.breadcrumbLink}>{item.text}</Link>
                    )}
                </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
