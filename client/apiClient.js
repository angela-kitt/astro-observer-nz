import request from 'superagent'

export function getApod() {
  return request.get('/api/v1/apod').then((res) => {
    return res.body
  })
}
