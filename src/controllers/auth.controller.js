import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'//Modulo para encriptar contraseña
import { createAccesToken } from '../libs/jwt.js'//Modulo para crear un token


export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password, 10)//pasamos el parametro contraseña y luego le indicamos la longitud de la contraseña
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });
        const userSaved = await newUser.save();//Metodo para guardar un usuario a la db
        const token = await createAccesToken({ id: userSaved._id })//creación del token
        res.cookie('token', token)//Guardar el token en una cookie
        res.json({//Mostrar datos especificos al momento de hacer un post
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createadAt: userSaved.createdAt,//Registrar fecha de creación
            updatedAt: userSaved.updatedAt,//Registrar fecha de actualización
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


        res.cookie('token', token)//Guardar el token en una cookie
        res.json({//Mostrar datos especificos al momento de hacer un post
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createadAt: userFound.createdAt,//Registrar fecha de creación
            updatedAt: userFound.updatedAt,//Registrar fecha de actualización
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

export const profile = (req, res) => {
    res.send('Profile')
}

// La estructura y representación de cómo se organizan los datos y cuáles son las reglas de validación al momneto  de registrar un usuario, se definio en un schema (archivo user.model.js)


