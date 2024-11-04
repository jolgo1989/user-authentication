import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,//Campo obligatorio
        trim: true//Elimina espacios en blanco alfinal y al principio del valor de 'nombre'
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true//Campo único en la colección
    },
    password: {
        type: String,
        require: true,

    }

}, {
    //Metodo para registrar frecha en que se creo un usuario
    timestamps: true
})

export default mongoose.model('User', userSchema)//User es el nombre del schema que hemos creado import express from 'express'

// NOTA: un schema ayuda a definir, validar y manejar los datos de manera estructurada y eficiente, garantizando la consistencia y calidad de los datos en la aplicación.