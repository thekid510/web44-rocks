require('dotenv').config() // this allows us to "inject" fake enviorment variables

const { PORT } = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors())
server.use(helmet())

server.get('/', (req,res)=> {
    res.send(`
    <h1>Web 44 is awesome</h1>
    `)
})

server.use('*', (req,res)=> {
    res.json({
        message: ' WEB 44 is Awesome'
    })
})
server.listen(PORT, ()=> { // heroku uses different port
    console.log(`listening on ${PORT}`)
})
 