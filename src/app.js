import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser"

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';


const app = express();

app.use(morgan('dev')); // Middleware para registrar solicitudes HTTP
app.use(express.json()); // Middleware para interpretar JSON
app.use(cookieParser())//Middleware para analizar (parsear en objeto JSON) cookies en las solicitudes HTTP

// Administrar rutas
app.use('/api', authRoutes); // app.use organiza y dirige las rutas a los controladores adecuados

app.use('/api', taskRoutes)

export default app;
