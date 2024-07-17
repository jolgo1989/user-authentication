import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {
    const { token } = req.cookies
    if (!token)
        return res.status(401).json({ message: 'No token, authorization denied' })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {

        if (err) return res.status(403).json({ message: "ivalid token" })

        req.user = user
        next()

    })

    // console.log(cookies)
    console.log('Toquen validado')

    // const { token } = req.cookies

    // if (!token)
    //     return res.status(401).json({ message: 'No token, authorization' })

    // jwt.verify(token, TOKEN_SECRET, (err, user) => {
    //     if (err) return res.status(403).json({ message: 'token invalidado' })

    //     req.user = user

    //     console.log(user)
    //     next()
    // })

}

// export const authRequired = (req, res, next) => {
//     console.log('validar token')
//     next()
// }

// export const authRequired = (req, res, next) => {
//     console.log(req.headers)
//     next()
// }


// export const authRequired = (req, res, next) => {
//     const token = req.headers.cookie
//     console.log(token)

//     next()
// }

// export const authRequired = (req, res, next) => {
//     const cookies = req.cookies
//     console.log(cookies)
//     next()
// }

