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
        <Section 
            left={true} 
            title="Alivio de Carga Laboral" 
            description="Liberamos a los productores de la tarea de manejar reclamos, permitiéndoles enfocarse en sus funciones principales."
        />
        <Section 
            left={false} 
            title="Generación de Ingresos Adicionales" 
            description="Obtienen beneficios económicos cuando se resuelven los reclamos, sin incurrir en costos adicionales"
        />
        <div className={classes.container_servicios}>
          <h2 className={classes.cards_title}>Servicios</h2>
          <div className={classes.cards}>
              <Card 
                  title="Gestión Integral de Reclamos" 
                  description="Nos encargamos de gestionar el reclamo del automotor siniestrado en casos donde la unidad asegurada no es responsable (culpa grave) directo del siniestro, desde la recepción hasta la resolución."
              />
              <Card 
                  title="Asistencia Legal Especializada" 
                  description="Contamos con un estudio jurídico con amplia experiencia en la materia para mediar y resolver los reclamos administrativos y judiciales en favor del asegurado."
              />
              <Card 
                  title="Beneficio Financiero Compartido" 
                  description="Compartimos un 20% de las ganancias generadas por la resolución exitosa del reclamo con el PAS (Productor Asesor de Seguros)."
              />
          </div>
        </div>
        <Contact />
      </div>

  </>
  )
}

export default Home