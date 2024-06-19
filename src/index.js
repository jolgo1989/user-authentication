import app from './app.js'
import { connectDB } from './db.js'

connectDB();//Conectarse a la db y despues iniciar el servidor

app.listen(4000)//Iniciar el servidor
console.log('Servidor a la escucha en el puerto', 4000)