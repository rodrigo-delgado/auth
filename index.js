const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
//App Setup

app.use(morgan('combined')) //loggin framework (mostly use it for debbugging)
app.use(bodyParser.json({type: '*/*'})) //middleware use to parse incoming request
router(app)
//Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)

server.listen(port)
console.log('Server listening on:', port);
