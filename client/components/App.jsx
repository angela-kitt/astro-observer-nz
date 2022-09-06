import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Apod from './Apod'
import MoonPhase from './MoonPhase'
import Weather from './Weather'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/moonphase" element={<MoonPhase />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </>
  )
}

export default App
