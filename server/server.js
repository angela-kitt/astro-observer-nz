const path = require('path')
const express = require('express')
const request = require('superagent')
const btoa = require('btoa')
const cors = require('cors')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

const hash = btoa(
  `${process.env.ASTRONOMY_API_APPLICATION_ID}:${process.env.ASTRONOMY_API_APPLICATION_SECRET}`
)

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

server.post('/api/v1/moonphase', (req, res) => {
  return request
    .post('https://api.astronomyapi.com/api/v2/studio/moon-phase')
    .set('Authorization', `Basic ${hash}`)
    .send({
      format: 'png',
      style: {
        moonStyle: 'default',
        backgroundStyle: 'solid',
        backgroundColor: 'black',
        headingColor: 'white',
        textColor: 'white',
      },
      observer: {
        latitude: -36.84846,
        longitude: 174.76333,
        date: '2022-08-31',
      },
      view: {
        type: 'portrait-simple',
        orientation: 'south-up',
      },
    })
    .then((response) => {
      res.json(response.body)
    })
    .catch(function (error) {
      console.log(error)
    })
})

module.exports = server
