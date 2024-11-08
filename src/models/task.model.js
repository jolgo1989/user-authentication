import mongoose from "mongoose";

// Definición del esquema de la colección "Task" para almacenar tareas en la base de datos
const taskSchema = new mongoose.Schema({

    // Campo 'title' para el título de la tarea
    title: {
        type: String,// Tipo de dato: cadena de texto
        required: true,// Campo obligatorio
    },

    // Campo 'description' para la descripción de la tarea
    description: {
        type: String,// Tipo de dato: cadena de texto
        required: true// Campo obligatorio
    },

    // Campo 'date' para la fecha de la tarea
    date: {
        type: Date,// Tipo de dato: fecha
        default: Date.now// Valor por defecto: fecha y hora actuales
    }
}, {
    timestamps: true,// Añade automáticamente 'createdAt' y 'updatedAt' al esquema
})

// Exporta el modelo 'Task' basado en el esquema 'taskSchema'
export default mongoose.model('Task', taskSchema)

// NOTA: un schema ayuda a definir, validar y manejar los datos de manera estructurada y eficiente, garantizando la consistencia y calidad de los datos en la aplicación.
