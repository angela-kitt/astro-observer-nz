import React, { useState, useEffect } from 'react'

import { getMoonPhase } from '../apiClient'

const style = { maxWidth: '500px' }

const MoonPhase = () => {
  const [moonPhase, setMoonPhase] = useState('')

  useEffect(() => {
    getMoonPhase()
      .then((newMoonPhase) => setMoonPhase(newMoonPhase))
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  return (
    <>
      <div>
        <img src={moonPhase} alt={'Phases of the Moon'} style={style} />
      </div>
    </>
  )
}

export default MoonPhase
