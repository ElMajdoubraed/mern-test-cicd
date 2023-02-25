const express = require('express')
const server = express()

server.get('/api', (req, res) => {
    res.send('Hello from the backend!')
})

app.listen(5000)