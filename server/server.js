
const path = require('path')
const express = require('express')

const server = express()

const dndRoutes = require('./routes/dnd')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/dnd', dndRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = server
