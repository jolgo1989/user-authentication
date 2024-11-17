import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'//Modulo para encriptar contraseña
import { createAccesToken } from '../libs/jwt.js'//Modulo para crear un token


export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {

        const userFound = await User.findOne({ email })//Comprobar si el email existe
        if (userFound) return res.status(400).json([" The email is already in use"])//Si el email ya existe responder con el codigo de estado 400

        const passwordHash = await bcrypt.hash(password, 10)//pasamos el parametro contraseña y luego le indicamos la longitud de la contraseña
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        const userSaved = await newUser.save();//Metodo para guardar un usuario a la db
        const token = await createAccesToken({ id: userSaved._id })//creación del 

        // Almacena el token de autenticación en una cookie llamada 'token' en la respuesta, 
        // permitiendo que el cliente guarde el token de sesión
        res.cookie('token', token)

        // Envía una respuesta JSON con los datos del usuario recién guardado en la base de datos
        res.json({
            id: userSaved._id,            // ID del usuario
            username: userSaved.username,  // Nombre de usuario
            email: userSaved.email,        // Correo electrónico del usuario
            createdAt: userSaved.createdAt, // Fecha de creación del usuario
            updatedAt: userSaved.updatedAt // Fecha de última actualización del usuario
        })

        // res.json(userSaved)mostrar en json todos los datos guardados
        // res.send('Usuario registrado con éxito'); mostrar un simplemensaje al momento de registrar usuario

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userFound = await User.findOne({ email })//Comprobar si el email existe
        if (!userFound) return res.status(400).json({ message: "user not found" })//Si el email no es encontrado responder con el codigo de estado 400

        const isMatch = await bcrypt.compare(password, userFound.password) //Comprobar si la contraseña es correcta
        if (!isMatch) return res.status(400).json({ message: 'incorrect password' })//Si la coontraseña es incorrecta responder con un codigo de estado 400

        const token = await createAccesToken({ id: userFound._id })//Del usuario encontrado tomar su id y crear un token


        // Almacena el token de autenticación en una cookie llamada 'token' en la respuesta
        res.cookie('token', token)

        // Envía una respuesta JSON con los datos del usuario autenticado
        res.json({
            id: userFound._id,            // ID del usuario
            username: userFound.username,  // Nombre de usuario
            email: userFound.email,        // Correo electrónico del usuario
            createdAt: userFound.createdAt, // Fecha de creación del usuario
            updatedAt: userFound.updatedAt // Fecha de última actualización del usuario
        })

        // res.json(userSaved)mostrar en json todos los datos guardados
        // res.send('Usuario registrado con éxito'); mostrar un simplemensaje al momento de registrar usuario

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Función para cerrar sesión del usuario
export const logout = (req, res) => {
    // Establece una cookie 'token' vacía y le asigna una fecha de expiración.
    // Esto elimina efectivamente la cookie del lado del cliente, cerrando la sesión del usuario.
    res.cookie('token', '', {
        expires: new Date(0) // La cookie expirará inmediatamente
    })

    // Devuelve un estado 200 indicando que la operación fue exitosa.
    return res.sendStatus(200)
}

// Controlador para obtener el perfil del usuario autenticado
export const profile = async (req, res) => {
    // Busca al usuario en la base de datos usando el ID almacenado en req.user.id (proveniente del token JWT)
    const userFound = await User.findById(req.user.id)

    // Si no se encuentra el usuario, responde con un estado 400 (solicitud incorrecta) y un mensaje de error
    if (!userFound) return res.status(400).json({ message: 'Usuario no encontrado' })

    // Si el usuario existe, responde con los datos del perfil del usuario
    return res.json({
        id: userFound._id,               // ID del usuario
        username: userFound.username,     // Nombre de usuario
        email: userFound.email,           // Correo electrónico del usuario
        createdAt: userFound.createdAt,   // Fecha de creación del usuario
        updatedAt: userFound.updatedAt    // Fecha de última actualización del usuario
    })
}


// La estructura y representación de cómo se organizan los datos y cuáles son las reglas de validación al momneto  de registrar un usuario, se definio en un schema (archivo user.model.js)


