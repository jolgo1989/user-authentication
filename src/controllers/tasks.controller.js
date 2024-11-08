import task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    const tasks = await task.find()
    res.json(tasks)
}

export const createtask = async (req, res) => {

    const { title, description, date } = req.body

    const newTask = new task({
        title,
        description,
        date
    })

    const saveTask = await newTask.save()

    res.json(saveTask)
}

export const getTask = async (req, res) => { }

export const updateTask = async (req, res) => { }

export const deleteTask = async (req, res) => { }