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
      <h3>Astronomy picture of the day hello: </h3>
      <div>
        <img src={apod} alt={'Random astronomical'} style={style} />
      </div>
    </>
  )
}

export default Apod
