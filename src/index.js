import app from './app.js'
import { conectDB } from './db.js'

// Llama a la función para conectarse a MongoDB
conectDB() // Conectar a la base de datos MongoDB

// Definición del puerto en el cual el servidor escuchará las solicitudes
const PORT = 4000

// Inicia el servidor en el puerto especificado
app.listen(PORT)

// Imprime en la consola el mensaje de confirmación del servidor
console.log(`Server on port ${PORT}`)
