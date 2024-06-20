import mongoose from "mongoose";//Modulo para conectarse a mongodb y crear el esquema

//El esquema lo creamos con la libreria de mongoose y es la estructura que indica cual es la forma en la que están estructurados los documentos que se almacenan en una colección de MongoDB.
const userSchema = new mongoose.Schema({
    username: {
        type: String,//Tipo de dato string
        require: true,//Campo requerido
        trim: true//Metodo para eliminar espacio en blanco " jolgo " el metodo string eliminara los eapcios enblanco "jolgo"
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true //Metodo para que cada email sea unico
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true//guardar fecha en la se creo y actualiza los datos
})

export default mongoose.model('User', userSchema)