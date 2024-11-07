import { Router } from "express";
import { register, login, logout, profile, } from "../controllers/auth.controller.js"

import { authRequired } from "../middlewares/validateToken.js"


const router = Router()

router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)


//authRequired: Middleware que verifica si el usuario está autenticado. Si no lo está, la solicitud es rechazada y no llega a la función profile.
//profile: Controlador que se ejecuta si el usuario pasa la verificación de authRequired. Devuelve la información del perfil del usuario.
router.get('/profile', authRequired, profile)//Apunta a la función controlador 'profile' y usa el middleware 'authRequired' para proteger la ruta




export default router