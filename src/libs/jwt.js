import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../confg.js'

export const createAccesToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,            // Información que se incluirá en el token
            TOKEN_SECRET,       // Clave secreta para firmar el token (almacenada de forma segura)
            {
                expiresIn: '1d' // Duración del token antes de expirar (1 día)
            },
            (err, token) => {
                if (err) reject(err); // Si ocurre un error en la creación del token, rechaza la promesa con el error
                resolve(token);       // Si el token se genera correctamente, resuelve la promesa con el token
            }
        );
    });
};

// header:Contiene el tipo de token y el algoritmo de firma.
// payload:Contiene las declaraciones sobre el usuario y otros datos relevantes.
// ejemplo: {
//     "username": "johndoe",
//     "role": "admin",
//     "iat": 1625689082(Tiempo que indica cuándo se emitió el token.)
//     "exp": 1625789082(Tiempo que indica cuándo expira el token.)
//   }
