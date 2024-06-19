import mongoose from "mongoose"; // Módulo para conectar Mongo db
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();


export const connectDB = async () => {
    try {
        const username = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD;
        const host = process.env.DB_HOST;
        const dbname = process.env.DB_NAME;
        // URI de conexión con credenciales
        const uri = `mongodb://${username}:${password}@${host}/${dbname}?authSource=admin`;

        // Conectar a la base de datos
        await mongoose.connect(uri);

        console.log('>>>>> DB conectada');
    } catch (error) {
        console.log('Error conectando a la DB:', error);
    }
};

//?base de datos sin autenticación
// export const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost/merndb')//Direción donde nos conectamos a la db
//         console.log('>>>>> DB conectada')
//     } catch (error) {
//         console.log(error)
//     }
// }

//db.auth('jolgo', 'AP288338')

