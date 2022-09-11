import React from 'react'
import MoonPhase from './MoonPhase'
import Weather from './Weather'

function Aside() {
  return (
    <>
      <div className="aside-container">
        <div>
          <MoonPhase />
        </div>
        <div>
          <Weather />
        </div>
      </div>
    </>
  )
}

export default Aside
