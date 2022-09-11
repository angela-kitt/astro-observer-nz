import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Apod from './Apod'
import Observations from './Observations'
import Links from './Links'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </>
  )
}

export default App
