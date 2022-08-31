import request from 'superagent'

export function getApod() {
  return request.get('/api/v1/apod').then((res) => {
    return res.body
  })
}

export function getMoonPhase() {
  return request.post('/api/v1/moonphase').then((res) => {
    const data = res.body.data
    return data.imageUrl
  })
}
