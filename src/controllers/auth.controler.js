//Función para registrar usuario
// Importar el modelo de usuario desde la ruta especificada

import User from '../models/user.model.js'

// Función para registrar un nuevo usuario
export const register = async (req, res) => {
    // Desestructuración del objeto req.body para obtener email, password y username
    const { email, password, username } = req.body

    try {
        // Crear una nueva instancia del modelo User con los datos proporcionados
        const newUser = new User({
            username,
            email,
            password
        })
        //Metodo para guardar el usuario
        const userSave = await newUser.save()//Metodo para mostrar los usuarios registrados 
        res.json(userSave)

        // Enviar una respuesta al cliente indicando que el registro fue exitoso
        // res.send('registrado')
        // Imprimir el nuevo usuario en la consola (para depuración)
        // Al crear un usuario se crea un ID de forma automatica , esto se debe a que es una caracteristica integrada de Mongoose
        // await newUser.save()
        // console.log(newUser)

    } catch (error) {
        console.log(error)
    }

}


//? NOTA:Los metodos comentados son funciones que puedes utilizar de prueba
export const login = (req, res) => res.send('login')

// Crear funciones para procesar peticiones
//?Metodo para observar si la ruta trabaja correctamente
// export const register = (req, res) => res.send('register')

//?Metodo para observar si se reciben los datos
// export const register = (req, res) => {
//     console.log(req.body)
//     res.send('registrando')
// }

// Utilizar este JSON en thunder client para probar si todo va bien
// {
//     "hello": "world"
// }

//?Metodo para observar si se reciben los datos para el usuario registrado
// export const register = (req, res) => {
//     // sintaxis de la desestructuración
//     const { email, password, username } = req.body

//     console.log(email, password, username)

//     res.send('registrado')
// }
// Utilizar este Json para probar si el metodo esta registrando a los usuarios correctamente
// {
//     "email": "jlgo60@hotmail.com",
//      "password": "jolgo",
//      "username": "jolgo60"
// }