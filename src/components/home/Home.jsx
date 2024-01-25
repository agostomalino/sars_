import React from 'react';
import classes from './Home.module.css';
import Section from '../section/Section';
import Contact from '../contact/Contact';
import Card from '../card/Card';

const Home = () => {
  return (<>
      <section className={classes.home}>
        <div className={`${classes.home_content} container`}>
            <div className={classes.h_left}>
                <h1 className={classes.home_title}>SARS</h1>
                <p className={classes.home_subtitle}>Servicio Asociado de Reclamos de Siniestros</p>
            </div>
            <div className={classes.h_right}>
                <h3 className={classes.home_cta}>HACE TU RECLAMO</h3>
                <p className={classes.callText}>Cargá el siniestro en el formulario para que nuestros asesores lo analicen.</p>
                <button className={classes.home_button}>RECLAMOS</button>
            </div>
        </div>
      </section>
      <div className={classes.containerSections}>
        <Section left={true}/>
        <Section left={false}/>
        <div className={classes.container_servicios}>
          <h2 className={classes.cards_title}>Servicios</h2>
          <div className={classes.cards}>
              <Card />
              <Card />
              <Card />
          </div>
        </div>
        <Contact />
      </div>

  </>
  )
}

export default Home