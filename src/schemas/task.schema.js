import { z } from 'zod' // Importa la biblioteca Zod para validar esquemas de datos

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required' // Mensaje de error si el título no está presente
    }),
    description: z.string({
        required_error: 'Description is required' // Mensaje de error si la descripción no está presente
    }),
    date: z.date({
        required_error: 'Date is required' // Mensaje de error si la fecha no está presente
    }).optional(), //Permite que la fecha sea opcional
})