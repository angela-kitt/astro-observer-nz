import React, { useState, useEffect } from 'react'
import { getApod } from '../apiClient'

const style = { maxWidth: '500px' }

const App = () => {
  const [apod, setApod] = useState('')

  useEffect(() => {
    getApod()
      .then((newApod) => setApod(newApod))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <h1>Astronomy Kiwi Observer</h1>
      <h3>Astronomy picture of the day: </h3>
      <div>
        <img src={apod} alt={'Random astronomical'} style={style} />
      </div>
    </>
  )
}

export default App
