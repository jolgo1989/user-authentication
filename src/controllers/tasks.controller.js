import Task from '../models/task.model.js'

// Función para obtener todas las tareas de la base de datos
export const getTasks = async (req, res) => {
    try {
        // Busca todas las tareas en la colección 'Task' y las almacena en la variable 'tasks'
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user') // Método para obtener automáticamente los datos del usuario (como id, username, email, etc.) asociados a cada tarea cuando se realiza una consulta GET en tasks. Esto permite incluir toda la información del usuario desde el esquema User en los resultados de la tarea.

        // Envía las tareas encontradas como una respuesta en formato JSON
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' })
    }
}

// Función para crear una nueva tarea en la base de datos
export const createtask = async (req, res) => {
    try {
        // Extrae los datos 'title', 'description' y 'date' del cuerpo de la solicitud
        const { title, description, date } = req.body

        // Muestra en consola el usuario autenticado que está creando la tarea
        console.log(req.user)

        // Crea una nueva instancia del modelo 'Task' usando los datos proporcionados
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id // Asocia la tarea con el usuario autenticado mediante su ID. Sin esta línea, el middleware `authRequired` en `taskRouter` evitará ejecutar la solicitud, ya que requiere que cada tarea esté vinculada a un usuario autenticado.
        })

        // Guarda la nueva tarea en la base de datos y almacena el resultado en 'saveTask'
        const saveTask = await newTask.save()

        // Envía la tarea guardada como una respuesta en formato JSON
        res.json(saveTask)
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' })
    }
}

// Función para obtener una tarea específica usando su ID
export const getTask = async (req, res) => {
    try {
        // Busca una tarea en la base de datos usando el ID proporcionado en los parámetros de la URL
        const task = await Task.findById(req.params.id).populate('user')// Método para obtener automáticamente los datos del usuario (como id, username, email, etc.) asociados a cada tarea cuando se realiza una consulta GET en tasks. Esto permite incluir toda la información del usuario desde el esquema User en los resultados de la tarea.

        // Si no se encuentra la tarea, devuelve un error 404 con un mensaje indicando que no se encontró la tarea
        if (!task) return res.status(404).json({ message: 'Task no encontrada' })
        // Si se encuentra la tarea, la envía como respuesta en formato JSON
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' })
    }
}

// Función para eliminar una tarea específica usando su ID
export const deleteTask = async (req, res) => {
    try {
        // Busca y elimina la tarea en la base de datos usando el ID proporcionado en los parámetros de la URL
        const task = await Task.findByIdAndDelete(req.params.id)

        // Si no se encuentra la tarea, devuelve un error 404 con un mensaje indicando que no se encontró la tarea
        if (!task) return res.status(404).json({ message: 'Task no founded' })

        // Si la tarea es encontrada y eliminada, la envía como respuesta en formato JSON
        // res.json({ message: 'Tarea eliminada exitosamente', task })

        return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({ message: 'task not deleted' })
    }
}


// Función para actualizar una tarea específica usando su ID
export const updateTask = async (req, res) => {
    try {
        // Busca y actualiza la tarea en la base de datos usando el ID proporcionado en los parámetros de la URL
        // También recibe el cuerpo de la solicitud (req.body) con los nuevos datos de la tarea
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })

        // Si no se encuentra la tarea, devuelve un error 404 con un mensaje indicando que no se encontró la tarea
        if (!task) return res.status(404).json({ message: 'Task no encontrada' })

        // Si la tarea es encontrada y actualizada, la envía como respuesta en formato JSON
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: 'task not updated' })
    }

}