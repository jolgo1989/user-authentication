import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }, description: {
        type: String,
        require: true
    }, date: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',//El user es el nombre de la referencia que se coloco en el modelo task.model
        require: true
    }
}, { timestamps: true })

export default mongoose.model("Task", taskSchema)