import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken'//Modulo para crear token

export const createAccesToken = (payload) => {


    return new Promise((resolve, reject) => {
        //Generar tokens
        jwt.sign(
            // {
            //     id: userSaved._id,
            // },
            payload,
            // Llave para crear un token
            TOKEN_SECRET, {

            expiresIn: '1d'
        },
            //CallBack
            (err, token) => {
                // if (err) console.log(err);
                if (err) reject(err)
                resolve(token)

            }

        )
    })


}


