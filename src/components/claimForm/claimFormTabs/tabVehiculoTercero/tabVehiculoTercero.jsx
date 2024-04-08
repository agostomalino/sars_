import React, { useState } from 'react';
import classes from './tabVehiculoTercero.module.css'; 

const TabVehiculoTercero = () => {

    const [tipoVehiculo, setTipoVehiculo] = useState('');
    const [marcaModelo, setMarcaModelo] = useState('');
    const [ano, setAno] = useState('');
    const [companiaAseguradora, setCompaniaAseguradora] = useState('');
    const [coberturaDestruccionTotal, setCoberturaDestruccionTotal] = useState(false);
    const [tieneFranquicia, setTieneFranquicia] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Tipo de Vehículo:', tipoVehiculo);
        console.log('Marca y Modelo:', marcaModelo);
        console.log('Año:', ano);
        console.log('Compañía Aseguradora:', companiaAseguradora);
        console.log('Tiene cobertura destrucción total:', coberturaDestruccionTotal);
        console.log('Tiene franquicia:', tieneFranquicia);

        // Clear form fields
        setTipoVehiculo('');
        setMarcaModelo('');
        setAno('');
        setCompaniaAseguradora('');
        setCoberturaDestruccionTotal(false);
        setTieneFranquicia(false);
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <label className={classes.label}>Tipo de Vehículo:</label>
                        <input
                            type="text"
                            value={tipoVehiculo}
                            onChange={(e) => setTipoVehiculo(e.target.value)}
                            className={classes.input}
                            required
                        />
                    </div>
                    <div className={classes.col}>
                        <label className={classes.label}>Marca y Modelo:</label>
                        <input
                            type="text"
                            value={marcaModelo}
                            onChange={(e) => setMarcaModelo(e.target.value)}
                            className={classes.input}
                            required
                        />
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <label className={classes.label}>Año:</label>
                        <input
                            type="text"
                            value={ano}
                            onChange={(e) => setAno(e.target.value)}
                            className={classes.input}
                            required
                        />
                    </div>
                    <div className={classes.col}>
                        <label className={classes.label}>Compañía Aseguradora:</label>
                        <input
                            type="text"
                            value={companiaAseguradora}
                            onChange={(e) => setCompaniaAseguradora(e.target.value)}
                            className={classes.input}
                            required
                        />
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <label className={classes.checkRow}>
                            Tiene cobertura destrucción total?
                            <input
                                type="checkbox"
                                checked={coberturaDestruccionTotal}
                                onChange={(e) => setCoberturaDestruccionTotal(e.target.checked)}
                                className={classes.checkbox}

                            />
                        </label>
                    </div>
                    <div className={classes.col}>
                        <label className={classes.checkRow}>
                            Tiene franquicia?
                            <input
                                type="checkbox"
                                checked={tieneFranquicia}
                                onChange={(e) => setTieneFranquicia(e.target.checked)}
                                className={classes.checkbox}
                            />
                        </label>
                    </div>
                </div>
                <button type="submit" className={classes.submitButton}>Enviar</button>
            </form>
        </div>
    );
}


export default TabVehiculoTercero;
