import axios from "./axios.js"
// import axios from "axios";

export const registerRequest = (user) => axios.post(`/register`, user);//Realiza una solicitud POST a la ruta /register de la API
export const loginRequest = (user) => axios.post(`/login`, user);//Realiza una solicitud POST a la ruta /login de la API

export const verifyTokenRequest = () => axios.get(`/verify`)

// Observación(ver video 3:14:50)
// Estas solicitudes fueron comentadas porque creamos una instancia personalizada de Axios(archivo axios.js), con el objetivo de permite que las solicitudes incluyan cookies y credenciales
// const API = "http://localhost:4000/api";// Define la URL base de la API
// Función para realizar una solicitud de registro del usuario
// Recibe un objeto 'user' con la información de registro
// export const registerRequest = (user) => axios.post(`${API}/register`, user);  Realiza una solicitud POST a la ruta /register de la API
// export const loginRequest = (user) => axios.post(`${API}/login`, user);  Realiza una solicitud POST a la ruta /login de la API

