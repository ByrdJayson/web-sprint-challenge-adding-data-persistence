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


module.exports = router