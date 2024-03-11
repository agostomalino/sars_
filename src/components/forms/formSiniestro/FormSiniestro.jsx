import React, {useState} from 'react';



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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        type="text"
                        id="fecha"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hora">Hora:</label>
                    <input
                        type="time"
                        id="hora"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="pais">País:</label>
                    <select
                        id="pais"
                        value={pais}
                        onChange={handlePaisChange}
                        required
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

                <div>
                    <label htmlFor="provincia">Provincia:</label>
                    <select
                    id="provincia"
                    value={provincia}
                    onChange={handleProvinciaChange}
                    required
                    >
                    <option value="">Seleccione una provincia</option>
                    {provinciasArgentinas.map((provincia, index) => (
                        <option key={index} value={provincia}>{provincia}</option>
                    ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="calle">Calle:</label>
                    <input
                        type="text"
                        id="calle"
                        value={calle}
                        onChange={(e) => setCalle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="calle">Altura:</label>
                    <input
                        type="text"
                        id="altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="calle">Intersección</label>
                    <input
                        type="text"
                        id="interseccion"
                        value={interseccion}
                        onChange={(e) => setInterseccion(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="entre">Entre calles</label>
                    <input
                        type="text"
                        id="entre"
                        value={entre}
                        onChange={(e) => setEntre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="monto">Monto Daños</label>
                    <input
                        type="text"
                        id="monto"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        required
                    />
                </div>

                <div>
                <label htmlFor="relato">Relato del hecho</label>
                <textarea
                    id="relato"
                    value={relato}
                    onChange={handleRelatoChange}
                    required
                />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default FormSiniestro;
