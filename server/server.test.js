import nock, { isDone } from 'nock'
import supertest from 'supertest'
import request from 'supertest'

import server from './server'

test('GET data from NASA APOD API', async () => {
  const mockResponse = {
    type: 'success',
    value: {
      title: 'great astronomy photo',
    },
  }
  nock('https://api.nasa.gov').get('/planetary/apod').reply(200, mockResponse)
  const res = await request(server).get('/api/v1/apod')
  expect(res.status).toBe(200)
  expect(res.body).toEqual(mockResponse)
})

test('GET data from Weather API', async () => {
  const mockResponse = {
    type: 'success',
    value: {
      tempHigh: 19,
      tempLow: 11,
    },
  }
  nock('https://api.weatherapi.com')
    .get(
      '/v1/forecast.json?key=a0dad396f5b94b9b85f52757220609&q=Auckland&days=3&aqi=no&alerts=no'
    )
    .reply(200, mockResponse)
  const res = await request(server).get('/api/v1/weather')
  expect(res.status).toBe(200)
  expect(res.body).toEqual(mockResponse)
})

test('POST data to Astronomy API', async () => {
  const mockSend = {
    format: 'png',
  }
  return await request(server)
    .post('/api/v1/moonphase')
    .send(mockSend)
    .then((response) => {
      expect(response.statusCode).toBe(200)
    })
})
