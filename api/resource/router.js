const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resp => {
            res.status(200).json(resp)
        })
        .catch(next)
})

router.post('/',  async (req, res, next) => {
    try{
        const resource = await Resource.postResource(req.body)
        res.status(201).json({
            resource_name: resource.resource_name,
            resource_id: resource.resource_id,
            resource_description: resource.resource_description
        })
    } catch(err){
        next(err)
    }
})


module.exports = router
