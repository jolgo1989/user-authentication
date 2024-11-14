import axios from "axios";

const API = "http://localhost:4000/api";// Define la URL base de la API

// Función para realizar una solicitud de registro del usuario
// Recibe un objeto 'user' con la información de registro
export const registerRequest = (user) => axios.post(`${API}/register`, user); // Realiza una solicitud POST a la ruta /register de la API


