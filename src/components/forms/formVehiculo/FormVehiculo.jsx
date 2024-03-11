import React,{useState} from 'react';

const FormVehiculo = () => {
    // Estados para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aca enviar al server
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Mensaje:', mensaje);
        // Limpiar los campos del formulario
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            />
        </div>
        <button type="submit">Enviar</button>
        </form>
    );
}

export default FormVehiculo