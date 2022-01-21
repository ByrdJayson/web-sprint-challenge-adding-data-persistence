// build your server here and require it from index.js
const express = require('express')
const server = express()
const knex = require('../knexfile')
const projectsRouter = require('./project/router')

server.use(express.json())
server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send('<h2>Jaysons Sprint API</h2>')
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = server