import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser"
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';


const app = express();


// Configuración de CORS para permitir solicitudes desde un origen específico
app.use(cors({
    origin: 'http://localhost:5173', // Define el origen permitido (cliente) desde el cual se aceptarán las solicitudes
    credentials: true // Permite que las solicitudes incluyan cookies y encabezados de autenticación(Esto fue necesario agregarlo por la instancia personalizada que creamos en axios.js)
}));

app.use(morgan('dev')); // Middleware para registrar solicitudes HTTP
app.use(express.json()); // Middleware para interpretar JSON
app.use(cookieParser())//Middleware para analizar (parsear en objeto JSON) cookies en las solicitudes HTTP

// Administrar rutas
app.use('/api', authRoutes); // app.use organiza y dirige las rutas a los controladores adecuados

app.use('/api', taskRoutes)

export default app;
