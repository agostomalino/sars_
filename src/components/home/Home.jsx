import React from 'react';
import classes from './Home.module.css';
import Section from '../section/Section';
import Contact from '../contact/Contact';
import Card from '../card/Card';
import CallToAction from '../callTo/CallToAction';
import { faHandshake, faScaleBalanced, faWallet } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const Home = () => {
    return (<>
        <section className={classes.home}>
            <div className={`${classes.home_content} container`}>
                <div className={classes.h_left}>
                    <h1 className={classes.home_title}>Servicio Asociado de <span className={classes.color_blue}>Cobro de Siniestros</span></h1>
                    <p className={classes.home_subtitle}>Ingresá a la plataforma de reclamos para cargar tu caso.</p>
                    <Link to='/log-in'className={classes.home_button}>Iniciar sesión</Link>
                </div>
            </div>
        </section>
        <div className={classes.containerSections}>
        <div className={classes.container_servicios}>
            <h2 className={classes.cards_title}>Servicios</h2>
            <div className={classes.cards}>
                <Card 
                    title="Gestión Integral de Reclamos" 
                    description="Nos encargamos de gestionar el reclamo del automotor siniestrado en casos donde la unidad asegurada no es responsable (culpa grave) directo del siniestro, desde la recepción hasta la resolución."
                    icon={faHandshake}
                    />
                <Card 
                    title="Asistencia Legal Especializada" 
                    description="Contamos con un estudio jurídico con amplia experiencia en la materia para mediar y resolver los reclamos administrativos y judiciales en favor del asegurado."
                    icon={faScaleBalanced}
                    />
                <Card 
                    title="Beneficio Financiero Compartido" 
                    description="Compartimos un 20% de las ganancias generadas por la resolución exitosa del reclamo con el PAS (Productor Asesor de Seguros)."
                    icon={faWallet}
                />
            </div>
        </div>
        </div>
        <div className={classes.sections}>
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
        </div>

        <div className={classes.containerSections}>
            <div className={classes.container_cta}>
                <CallToAction/>
            </div>

            <Contact />
        </div>

    </>
    )
}

export default Home;