// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(next)
})

router.post('/', async (req, res, next) => {
    try {
        const project = await Project.addProject(req.body)
        res.status(201).json({
            project_id: project.project_id,
            project_name: project.project_name,
            project_description: project.project_description,
            project_completed: project.project_completed === 1 ? true : false
        })
    } catch(err){
        next(err)
    }
    


})

module.exports = router