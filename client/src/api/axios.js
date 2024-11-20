import axios from 'axios'; // Importa la biblioteca Axios para realizar solicitudes HTTP

// Crea una instancia personalizada de Axios con configuraciones predeterminadas
const instance = axios.create({
    baseURL: 'http://localhost:4000/api', // URL base para las solicitudes HTTP
    withCredentials: true // Permite que las solicitudes incluyan cookies y credenciales
});

export default instance; // Exporta la instancia personalizada para su uso en otras partes del proyecto
