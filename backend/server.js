const express = require('express')
const server = express()

server.get('/api', (req, res) => {
    res.send('Hello from the backend test1!')
})

server.get('/', (req, res) => {
    res.send('Hello from the backend test1 ...!')
})

server.listen(5000)
