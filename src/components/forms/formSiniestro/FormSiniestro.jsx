import React, {useState} from 'react';
import classes from './FormSiniestro.module.css';

const provinciasArgentinas = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán"
];

const FormSiniestro = () => {
    // Estados para cada campo del formulario
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [pais, setPais] = useState('Argentina');
    const [provincia, setProvincia] = useState('');
    const [calle, setCalle] = useState('');
    const [altura, setAltura] = useState('');
    const [interseccion, setInterseccion] = useState('');
    const [entre, setEntre] = useState('');
    const [relato, setRelato] = useState('');
    const [monto, setMonto] = useState('');



    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aca enviar al server
        console.log('Fecha:', fecha);
        console.log('Email:', hora);
        console.log('País:', pais);
        console.log('CALLE:', calle);

        // Limpiar los campos del formulario
        setFecha('');
        setHora('');
        setPais('');
        setCalle('');
    };

    //Select Pais
    const handlePaisChange = (event) => {
        setPais(event.target.value); 
    };

    //Select Provincia
    const handleProvinciaChange = (event) => {
        setProvincia(event.target.value);
    };

    //Textarea relato

    const handleRelatoChange = (event) => {
        setRelato(event.target.value);
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.formGroup}>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <label htmlFor="fecha" className={classes.label}>Fecha:</label>
                            <input
                                type="text"
                                id="fecha"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                required
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.col}>
                            <label htmlFor="hora" className={classes.label}>Hora:</label>
                            <input
                                type="time"
                                id="hora"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                required
                                className={classes.input}
                            />       
                        </div>
                    </div>
                </div>
                <div className={classes.row}>
                        <div className={classes.col}>
                            <label htmlFor="pais" className={classes.label}>País:</label>
                            <select
                                id="pais"
                                value={pais}
                                onChange={handlePaisChange}
                                required
                                className={classes.select}
                            >
                                <option value="">Seleccione un país</option>
                                <option value="argentina">Argentina</option>
                                <option value="chile">Chile</option>
                                <option value="brasil">Brasil</option>
                                <option value="paraguay">Paraguay</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="bolivia">Bolivia</option>
                            </select>
                        </div>
                        <div className={classes.col}>
                            <label htmlFor="provincia" className={classes.label}>Provincia:</label>
                            <select
                                id="provincia"
                                value={provincia}
                                onChange={handleProvinciaChange}
                                required
                                className={classes.select}
                            >
                                <option value="provincia">Seleccione una provincia</option>
                                {provinciasArgentinas.map((provincia, index) => (
                                    <option key={index} value={provincia}>{provincia}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                <div className={classes.formGroup}>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <label htmlFor="calle" className={classes.label}>Calle:</label>
                            <input
                                type="text"
                                id="calle"
                                value={calle}
                                onChange={(e) => setCalle(e.target.value)}
                                required
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.col}>
                            <label htmlFor="altura" className={classes.label}>Altura:</label>
                            <input
                                type="text"
                                id="altura"
                                value={altura}
                                onChange={(e) => setAltura(e.target.value)}
                                required
                                className={classes.input}
                            />
                        </div>

                    </div>
                </div>
                <div className={classes.formGroup}>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <label htmlFor="interseccion" className={classes.label}>Intersección</label>
                            <input
                                type="text"
                                id="interseccion"
                                value={interseccion}
                                onChange={(e) => setInterseccion(e.target.value)}
                                required
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.col}>
                            <label htmlFor="entre" className={classes.label}>Entre calles</label>
                            <input
                                type="text"
                                id="entre"
                                value={entre}
                                onChange={(e) => setEntre(e.target.value)}
                                required
                                className={classes.input}
                            />
                        </div>
                    </div>
                </div>
    
                <div className={classes.formGroup}>
                    <div className={classes.row}>
                        <div className={classes.col}>
                            <label htmlFor="monto" className={classes.label}>Monto Daños</label>
                            <input
                                type="text"
                                id="monto"
                                value={monto}
                                onChange={(e) => setMonto(e.target.value)}
                                required
                                className={classes.input}
                            />
                        </div>
                        <div className={classes.col}></div>
                    </div>
                </div>
    
                <div className={classes.formGroup}>
                    <label htmlFor="relato" className={classes.label}>Relato del hecho</label>
                    <textarea
                        id="relato"
                        value={relato}
                        onChange={handleRelatoChange}
                        required
                        className={classes.textarea}
                    />
                </div>
    
                <button type="submit" className={classes.submitButton}>Enviar</button>
            </form>
        </div>
    );
}
export default FormSiniestro;
