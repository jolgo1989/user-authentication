import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'//Modulo para encriptar contraseña
import { createAccesToken } from '../libs/jwt.js'//Modulo para encriptar contraseña



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
            createadAt: userSaved.updatedAt,//Registrar fecha de actualización
        })
        // res.json(userSaved)mostrar en json todos los datos guardados
        // res.send('Usuario registrado con éxito'); mostrar un simplemensaje al momento de registrar usuario

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const login = (req, res) => {
    res.send('Login');
};

// La estructura y representación de cómo se organizan los datos y cuáles son las reglas de validación al momneto  de registrar un usuario, se definio en un schema (archivo user.model.js)


