require('dotenv').config() // this allows us to "inject" fake enviorment variables

// const { PORT } = require('./config')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors())
server.use(helmet())

server.get('/', (req,res)=> {
    res.send(`
    <h1>Web 51 is too cool for school </h1>
    `)
})

server.use('*', (req,res)=> {
    res.json({
        message: ' WEB 32 is quiet'
    })
})
server.listen(process.env.PORT || 6000, ()=> { // heroku uses different port
    console.log(`listening on ${process.env.PORT || 6000}`)
})
 