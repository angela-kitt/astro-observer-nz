import React, { useState, useEffect } from 'react'

import { getApod } from '../apiClient'

const style = { maxWidth: '500px' }

const Apod = () => {
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
      <div className="apod">
        <h3>Astronomy picture of the day: </h3>
        <div>
          <img src={apod} alt={'Random NASA photo'} style={style} />
        </div>
      </div>
    </>
  )
}

export default Apod
