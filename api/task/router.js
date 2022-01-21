const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.get()
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const t = await Task.postTask(req.body)
        res.status(201).json({
            task_id: t.task_id,
            task_description: t.task_description,
            task_notes: t.task_notes,
            task_completed: t.task_completed === 1 ? true : false,
            project_id: t.project_id
        })
    } catch(error) {
        next(error)
    }
})


module.exports = router