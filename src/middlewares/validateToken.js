import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../confg.js'

// Middleware para verificar si el usuario está autenticado(Proteger ruta)
export const authRequired = (req, res, next) => {
    // Extrae el token de las cookies
    const { token } = req.cookies

    // Si no hay token, devuelve un estado 401 (no autorizado)
    if (!token)
        return res.status(401).json({ message: 'No token, authorization denied' })

    // Verifica si el token es válido
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        // Si el token es inválido o hay un error, devuelve un estado 403 (prohibido)
        if (err) return res.status(403).json({ message: 'invalid token' })

        // Si el token es válido, almacena la información del usuario en req.user
        req.user = user

        // Llama a next() para continuar con el siguiente middleware o ruta
        next()
    })
}



