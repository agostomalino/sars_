import React from 'react';
import classes from './Section.module.css';
import reunionImage from '../../assets/reunion.jpeg';

const Section = ({ left }) => {
    const flexDirection = left ? 'row' : 'row-reverse';
    const sectionStyle = { flexDirection: flexDirection };

    return (
        <section className={classes.section} style={sectionStyle}>
        <div className={classes.containerLeft}>
            <h2 className={classes.titulo}>TITULO</h2>
            <p className={classes.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, rem optio. Eum
            consequuntur aut, molestiae minima quis optio dolore porro totam, voluptatem qui vero
            aspernatur omnis, quasi nam officiis fuga.
            </p>
        </div>
        <div className={classes.containerRight}>
            <img src={reunionImage} alt="reunion" className={classes.img} />
        </div>
        </section>
    );
    };

export default Section;
