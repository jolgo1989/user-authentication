import { z } from 'zod' // Importa la biblioteca Zod para validar esquemas de datos

// Esquema de validación para el registro de usuario
export const registerSchema = z.object({
    // Campo 'username' debe ser una cadena de texto y es obligatorio
    username: z.string({
        required_error: 'Username is required' // Mensaje de error si el nombre de usuario no está presente
    }),

    // Campo 'email' debe ser una cadena de texto y en formato de correo electrónico
    email: z.string({
        required_error: 'Email is required' // Mensaje de error si el correo electrónico no está presente
    }).email({
        required_error: 'Email is invalid' // Mensaje de error si el correo no tiene un formato válido
    }),

    // Campo 'password' debe ser una cadena de texto y al menos de 6 caracteres de longitud
    password: z.string({
        required_error: 'Password is required' // Mensaje de error si la contraseña no está presente
    }).min(6, {
        message: 'Password must be at least 6 characters long' // Mensaje de error si la contraseña es demasiado corta
    })
})

// Esquema de validación para el inicio de sesión de usuario
export const loginSchema = z.object({
    // Campo 'email' debe ser una cadena de texto en formato de correo electrónico
    email: z.string({
        required_error: 'Email is required' // Mensaje de error si el correo electrónico no está presente
    }).email({
        message: 'Email is not invalid' // Mensaje de error si el correo no tiene un formato válido
    }),

    // Campo 'password' debe ser una cadena de texto y al menos de 6 caracteres de longitud
    password: z.string({
        required_error: 'Password is required' // Mensaje de error si la contraseña no está presente
    }).min(6, {
        message: 'Password must be at least 6 characters long' // Mensaje de error si la contraseña es demasiado corta
    })
})
