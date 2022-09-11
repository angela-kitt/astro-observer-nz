import React, { useState, useEffect } from 'react'

import { getWeather, sendLocation } from '../apiClient'

const style = { maxWidth: '500px' }
const initialData = { location: '' }

export default function Weather() {
  const [data, setData] = useState(initialData)
  const [weather, setWeather] = useState('')
  const { location } = data

  useEffect(() => {
    getWeather()
      .then((newWeather) => setWeather(newWeather))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    sendLocation(location)
    alert(`The location you entered was: ${location}`, setData(initialData))
  }

  const today = weather[0]
  const day = { today }
  const arr = Object.values(day)
  const obj = arr[0]
  const thing = { ...obj }
  const thing2 = Object.values(thing)
  const thing3 = thing2[2]
  const thing4 = { ...thing3 }
  const thing5 = Object.values(thing4)
  const maxTemp = thing5[0]
  const minTemp = thing5[2]
  const condition = thing5[17]
  const currCond = { ...condition }
  const forecast = Object.values(currCond)
  const forecastToday = forecast[0]
  const imageLink = forecast[1]

  return (
    <>
      <h3>Weather today</h3>
      <div>High: {maxTemp} C</div>
      <div>Low: {minTemp} C</div>
      <div>{forecastToday}</div>
      <div>
        <img src={imageLink} alt={'Current weather condition'} style={style} />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter your location: </label>
        <p></p>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  )
}
