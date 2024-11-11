import { Router } from "express";
import { register, login, logout, profile, } from "../controllers/auth.controller.js"

import { authRequired } from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validator.middleware.js"
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

// Ruta para el registro de usuarios
// Aplica el middleware validateSchema con el esquema registerSchema para validar los datos de registro
// Luego ejecuta la función register si los datos son válidos
router.post('/register', validateSchema(registerSchema), register)

// Ruta para el inicio de sesión de usuarios
// Aplica el middleware validateSchema con el esquema loginSchema para validar los datos de inicio de sesión
// Luego ejecuta la función login si los datos son válidos
router.post('/login', validateSchema(loginSchema), login)

// Ruta para cerrar sesión de usuarios
// Llama directamente a la función logout para manejar el cierre de sesión
router.post('/logout', logout)


//authRequired: Middleware que verifica si el usuario está autenticado. Si no lo está, la solicitud es rechazada y no llega a la función profile.
//profile: Controlador que se ejecuta si el usuario pasa la verificación de authRequired. Devuelve la información del perfil del usuario.
router.get('/profile', authRequired, profile)//Apunta a la función controlador 'profile' y usa el middleware 'authRequired' para proteger la ruta


export default router