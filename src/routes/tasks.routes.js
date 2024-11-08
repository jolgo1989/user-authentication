import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, createtask, updateTask, deleteTask } from '../controllers/tasks.controller.js'

const router = Router()

//authRequired: Middleware que verifica si el usuario está autenticado. Si no lo está, la solicitud es rechazada y no llega a la función tasks.
router.get('/tasks', authRequired, getTasks)// Define una ruta GET para obtener todas las tareas
router.get('/tasks/:id', authRequired, getTask)// Define una ruta GET para obtener una tarea específica por su ID
router.post('/tasks', authRequired, createtask)// Define una ruta POST para crear una nueva tarea
router.delete('/tasks/:id', authRequired, deleteTask)// Define una ruta DELETE para eliminar una tarea específica por su ID
router.put('/tasks/:id', authRequired, updateTask)// Define una ruta PUT para actualizar una tarea específica por su ID

export default router