import mongoose from "mongoose"; // Módulo para conectar Mongo db

// Función para conectar a la base de datos MongoDB
export const conectDB = async () => {
    try {
        // Conectándose a la base de datos 'merndb' en el servidor local
        await mongoose.connect("mongodb://localhost/merndb") // Establece la conexión con MongoDB

        // Mensaje de éxito si la conexión se establece correctamente
        console.log('>>> db is connected')
    } catch (error) {
        // Captura y muestra cualquier error que ocurra al intentar conectar
        console.log(error)
    };
}


// export const conectDB = async () => {
//     try {
//         const username = 'jolgo'
//         const password = 'AP288338'
//         const host = 'localhost'
//         const dbname = 'merndb'
//         URI de conexión con credenciales
//         const uri = `mongodb://${username}:${password}@${host}/${dbname}?authSource=admin`;

//         Conectar a la base de datos
//         await mongoose.connect(uri);

//         console.log('>>>>> DB conectada');
//     } catch (error) {
//         console.log('Error conectando a la DB:', error);
//     }
// };

//?base de datos sin autenticación
