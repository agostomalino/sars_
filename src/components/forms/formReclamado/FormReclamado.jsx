import React, { useState } from 'react';
import classes from './FormReclamado.module.css'; 

const FormReclamado = () => {
    const [titular, setTitular] = useState(false);
    const [lesionado, setLesionado] = useState(false);
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefonoFijo, setTelefonoFijo] = useState('');
    const [telefonoMovil, setTelefonoMovil] = useState('');
    const [email, setEmail] = useState('');
    const [esPersonaJuridica, setEsPersonaJuridica] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar los datos del formulario 
    };

    return (
        <form onSubmit={handleSubmit} className={classes.container}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="titular" className={classes.label}>Titular:</label>
                    <div className={classes.checkboxContainer}>
                        <label>
                            <input
                                type="checkbox"
                                checked={titular}
                                onChange={() => setTitular(!titular)}
                                className={classes.checkbox}
                            /> 
                        </label>
                    </div>
                </div>
                <div className={classes.col}>
                    <label htmlFor="lesionado" className={classes.label}>Lesionado:</label>
                    <div className={classes.checkboxContainer}>
                        <label>
                            <input
                                type="checkbox"
                                checked={lesionado}
                                onChange={() => setLesionado(!lesionado)}
                                className={classes.checkbox}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="numeroDocumento" className={classes.label}>Número Documento:</label>
                    <input
                        type="text"
                        id="numeroDocumento"
                        value={numeroDocumento}
                        onChange={(e) => setNumeroDocumento(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="nombre" className={classes.label}>Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className={classes.input}
                    />
                </div>
                <div className={classes.col}>
                    <label htmlFor="apellido" className={classes.label}>Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="telefonoFijo" className={classes.label}>Teléfono Fijo:</label>
                    <input
                        type="text"
                        id="telefonoFijo"
                        value={telefonoFijo}
                        onChange={(e) => setTelefonoFijo(e.target.value)}
                        className={classes.input}
                    />
                </div>
                <div className={classes.col}>
                    <label htmlFor="telefonoMovil" className={classes.label}>Teléfono Móvil:</label>
                    <input
                        type="text"
                        id="telefonoMovil"
                        value={telefonoMovil}
                        onChange={(e) => setTelefonoMovil(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label htmlFor="email" className={classes.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={classes.input}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <label className={classes.label}>Es persona jurídica:</label>
                    <div className={classes.checkboxContainer}>
                        <label>
                            <input
                                type="checkbox"
                                checked={esPersonaJuridica}
                                onChange={() => setEsPersonaJuridica(!esPersonaJuridica)}
                                className={classes.checkbox}
                            /> SI
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={!esPersonaJuridica}
                                onChange={() => setEsPersonaJuridica(!esPersonaJuridica)}
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

export default FormReclamado;