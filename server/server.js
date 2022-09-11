const path = require('path')
const express = require('express')
const request = require('superagent')
const btoa = require('btoa')
const cors = require('cors')
const moment = require('moment-timezone')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

const hash = btoa(
  `${process.env.ASTRONOMY_API_APPLICATION_ID}:${process.env.ASTRONOMY_API_APPLICATION_SECRET}`
)

const currentDate = moment().tz('Pacific/Auckland').format('YYYY-MM-DD')

let location = 'Auckland'

function getLocation(data) {
  const location1 = data.slice(1, 20)
  console.log('Set location: ', location1)
  return location1
}

server.get('/api/v1/apod', (req, res) => {
  return request
    .get('https://api.nasa.gov/planetary/apod')
    .set('x-api-key', process.env.SECRET_NASA_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch(function (error) {
      console.log(error)
    })
})

server.get('/api/v1/weather', (req, res) => {
  return request
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.SECRET_WEATHER_KEY}&q=${location}&days=3&aqi=no&alerts=no`
    )
    .set('key', process.env.SECRET_WEATHER_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch(function (error) {
      console.log(error)
    })
})

server.post('/api/v1/weather/:location', (req, res) => {
  const loc = req.params.location
  return getLocation(loc)
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
        date: `${currentDate}`,
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
