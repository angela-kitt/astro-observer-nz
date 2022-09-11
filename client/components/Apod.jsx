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
      <h2>{apod.title}</h2>
      <div>
        <img src={apod.url} alt={'Random NASA photo'} style={style} />
      </div>
    </>
  )
}

export default Apod
