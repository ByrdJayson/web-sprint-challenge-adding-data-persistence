// build your server here and require it from index.js
const express = require('express')
const server = express()
const knex = require('../knexfile')

server.use(express.json())
server.get('/', (req, res) => {
    res.send('<h2>Jaysons Sprint API</h2>')
})

module.exports = server