const path = require('path')
const express = require('express')
const request = require('superagent')
// const cors = require('cors')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

server.get('/api/v1/apod', (req, res) => {
  return request
    .get('https://api.nasa.gov/planetary/apod')
    .set('x-api-key', process.env.SECRET_NASA_KEY)
    .then((response) => {
      res.json(response.body.url)
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = server
