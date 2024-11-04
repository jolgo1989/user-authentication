import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../confg.js'

export const createAccesToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: '1d'
            },
            (err, token) => {
                if (err) reject(err)//Si algo sale mal arrojar el error
                resolve(token)//si todo sale bien genera el token
            }
        )
    })

}

// header:Contiene el tipo de token y el algoritmo de firma.
// payload:Contiene las declaraciones sobre el usuario y otros datos relevantes.
// ejemplo: {
//     "username": "johndoe",
//     "role": "admin",
//     "iat": 1625689082(Tiempo que indica cuándo se emitió el token.)
//     "exp": 1625789082(Tiempo que indica cuándo expira el token.)
//   }
