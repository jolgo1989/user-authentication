import mongoose from "mongoose";

// Definición del esquema 'userSchema' para almacenar usuarios en la base de datos
const userSchema = new mongoose.Schema({

    // Campo 'username' para el nombre de usuario
    username: {
        type: String,// Tipo de dato: cadena de texto
        required: true,// Campo obligatorio
        trim: true// Elimina espacios en blanco al inicio y final del valor
    },
    // Campo 'email' para el correo electrónico del usuario
    email: {
        type: String,// Tipo de dato: cadena de texto
        required: true,// Campo obligatorio
        trim: true,// Elimina espacios en blanco al inicio y final del valor
        unique: true// El correo debe ser único en la colección
    },
    // Campo 'password' para la contraseña del usuario
    password: {
        type: String,// Tipo de dato: cadena de texto
        required: true// Campo obligatorio
    }
}, {
    // Habilita la creación automática de los campos 'createdAt' y 'updatedAt'
    timestamps: true// Registra la fecha de creación y última actualización del usuario
})
// Exporta el modelo 'User' basado en el esquema 'userSchema'
export default mongoose.model('User', userSchema)

// NOTA: un schema ayuda a definir, validar y manejar los datos de manera estructurada y eficiente, garantizando la consistencia y calidad de los datos en la aplicación.