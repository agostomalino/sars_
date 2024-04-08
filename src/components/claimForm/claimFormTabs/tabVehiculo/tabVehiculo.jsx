import React, { useState } from 'react';
import classes from './tabVehiculo.module.css';

const TabVehiculo = () => {
    const [dominio, setDominio] = useState('');
    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [marcaModelo, setMarcaModelo] = useState('');
    const [ano, setAno] = useState('');
    const [companiaAseguradora, setCompaniaAseguradora] = useState('');
    const [destruccionTotal, setDestruccionTotal] = useState(false);
    const [franquicia, setFranquicia] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar los datos del formulario
    };

    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="dominio" className={classes.label}>Dominio:</label>
                    <input
                        type="text"
                        id="dominio"
                        value={dominio}
                        onChange={(e) => setDominio(e.target.value)}
                        className={classes.input}
                    />
                </div>
                <div className={classes.col}>
                    <label htmlFor="tipoVehiculo" className={classes.label}>Tipo de Vehiculo:</label>
                    <input
                        type="text"
                        id="tipoVehiculo"
                        value={tipoVehiculo}
                        onChange={(e) => setTipoVehiculo(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="marcaModelo" className={classes.label}>Marca y Modelo:</label>
                    <input
                        type="text"
                        id="marcaModelo"
                        value={marcaModelo}
                        onChange={(e) => setMarcaModelo(e.target.value)}
                        className={classes.input}
                    />
                </div>
                <div className={classes.col}>
                    <label htmlFor="ano" className={classes.label}>Año:</label>
                    <input
                        type="text"
                        id="ano"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="companiaAseguradora" className={classes.label}>Compañia aseguradora:</label>
                    <input
                        type="text"
                        id="companiaAseguradora"
                        value={companiaAseguradora}
                        onChange={(e) => setCompaniaAseguradora(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="destruccionTotal" className={classes.label}>Tiene cobertura destrucción total:</label>
                    <div className={classes.checkboxContainer}>
                        <label>
                            <input
                                type="checkbox"
                                checked={destruccionTotal}
                                onChange={() => setDestruccionTotal(!destruccionTotal)}
                                className={classes.checkbox}
                            /> SI
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={!destruccionTotal}
                                onChange={() => setDestruccionTotal(!destruccionTotal)}
                                className={classes.checkbox}
                            /> NO
                        </label>
                    </div>
                </div>
                <div className={classes.col}>
                    <label htmlFor="franquicia" className={classes.label}>Tiene franquicia:</label>
                    <div className={classes.checkboxContainer}>
                        <label>
                            <input
                                type="checkbox"
                                checked={franquicia}
                                onChange={() => setFranquicia(!franquicia)}
                                className={classes.checkbox}
                            /> SI
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={!franquicia}
                                onChange={() => setFranquicia(!franquicia)}
                                className={classes.checkbox}
                            /> NO
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" className={classes.submitButton}>Enviar</button>
        </form>
    );
}

export default TabVehiculo;