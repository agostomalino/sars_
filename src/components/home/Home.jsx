import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <section className="home">
    <div className="home_content container">
        <div className="home_left">
            <h1 className="home_title">SARS</h1>
            <p className="home_subtitle">Servicio Asociado de Reclamos de Siniestros</p>
        </div>
        <div className="home_right">
            <p className="home_cta">HACE TU RECLAMO!</p>
            <button className="home_button">Reclamos</button>
        </div>
    </div>
</section>
  )
}

export default Home