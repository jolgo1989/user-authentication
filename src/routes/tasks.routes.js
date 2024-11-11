import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, createtask, updateTask, deleteTask } from '../controllers/tasks.controller.js'

import { validateSchema } from "../middlewares/validator.middleware.js"
import { createTaskSchema } from '../schemas/task.schema.js'

const router = Router()

//authRequired: Middleware que verifica si el usuario está autenticado. Si no lo está, la solicitud es rechazada y no llega a la función tasks.
router.get('/tasks', authRequired, getTasks)// Define una ruta GET para obtener todas las tareas
router.get('/tasks/:id', authRequired, getTask)// Define una ruta GET para obtener una tarea específica por su ID
// Define una ruta POST para crear una nueva tarea
router.post(
    '/tasks',               // Ruta en la cual se reciben las solicitudes POST para crear tareas
    authRequired,           // Middleware que verifica si el usuario está autenticado
    validateSchema(createTaskSchema), // Middleware que valida los datos de la solicitud con el esquema 'createTaskSchema'
    createtask              // Controlador que maneja la lógica para crear y almacenar la nueva tarea
)

router.delete('/tasks/:id', authRequired, deleteTask)// Define una ruta DELETE para eliminar una tarea específica por su ID
router.put('/tasks/:id', authRequired, updateTask)// Define una ruta PUT para actualizar una tarea específica por su ID


export default router


