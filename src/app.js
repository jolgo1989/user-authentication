import express from 'express'
import morgan from 'morgan'
import cookiesParser from 'cookie-parser'
import autRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'

const app = express()
// Para poder ejecutar esta linea de codigo (const cookies = req.cookies), la cual esta en validateToken.js debes importar el middlewares cookiesParser
app.use(morgan("dev"))
app.use(express.json())//!Este middlewhere debes colocarlo para que  muestre las peticiones RECUERDA LO QUE PASO EN LA U
app.use(cookiesParser())


app.use("/api", autRoutes)
app.use("/api", taskRoutes)

export default app

