import { z } from 'zod'
//Validar register
export const registerSchema = z.object({
    username: z.string({
        required_error: 'username is require',
    }),
    email: z
        .string({ required_error: 'email is required', })
        .email({
            message: 'invalid email',
        }),
    password: z
        .string({
            required_error: 'password is required',
        })
        .min(6, {
            message: 'Password must be least 6 characters',
        }),
})

//Validar logIn
export const loginSchema = z.object({
    email: z.string({ required_error: 'Email is required', })
        .email({
            message: 'Invalid email',
        }),
    password: z.string({
        required_error: 'Password is required'
    })
        .min(6, {
            message: 'Password must be at least 6 charcters',
        }),
})