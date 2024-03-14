import React from 'react';
import classes from './Section.module.css';


const Section = ({ left, title, description,imagen }) => {
    const flexDirection = left ? 'row' : 'row-reverse';
    const sectionStyle = { flexDirection: flexDirection };

    return (
        <section className={classes.section} style={sectionStyle}>
        <div className={classes.containerLeft}>
            <h2 className={classes.titulo}>{title}</h2>
            <div className={classes.line}></div>
            <p className={classes.description}>
                {description}
            </p>
        </div>
        <div className={classes.containerRight}>
            <img src={imagen} alt="reunion" className={classes.img} />
        </div>
        </section>
    );
    };

export default Section;
