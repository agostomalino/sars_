import React from 'react';
import classes from './Home.module.css';
import Section from '../section/Section';

const Home = () => {
  return (<>
      <section className={classes.home}>
        <div className={`${classes.home_content} container`}>
            <div className={classes.h_left}>
                <h1 className={classes.home_title}>SARS</h1>
                <p className={classes.home_subtitle}>Servicio Asociado de Reclamos de Siniestros</p>
            </div>
            <div className={classes.h_right}>
                <h3 className={classes.home_cta}>HACE TU RECLAMO!</h3>
                <p className={classes.callText}>Carga tu reclamo en el formulario para que nuestros asesores lo analicen.</p>
                <button className={classes.home_button}>Reclamos</button>
            </div>
        </div>
      </section>

      <Section left={true}/>
      <Section left={false}/>
  </>
  )
}

export default Home