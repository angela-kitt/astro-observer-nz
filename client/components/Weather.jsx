import React, { useState, useEffect } from 'react'

import { getWeather } from '../apiClient'

const style = { maxWidth: '500px' }

const Weather = () => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    getWeather()
      .then((newWeather) => setWeather(newWeather))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

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
    </>
  )
}

export default Weather
