import { z } from 'zod'

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),
    description: z.string({
        required_error: 'Description is must be string',
    }),
    date: z.string().datetime().optional(),
    //Metodo optional() es para que un campo sea validado opcionalmente por el usuario
})