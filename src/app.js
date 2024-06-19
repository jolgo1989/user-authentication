import express from 'express'
import morgan from 'morgan'
import autRoutes from './routes/auth.routes.js'

const app = express()

app.use(morgan('dev'))

app.use(express.json())//!Este middlewhere debes colocarlo para que  muestre las peticiones RECUERDA LO QUE PASO EN LA U

app.use("/api", autRoutes)

export default app

