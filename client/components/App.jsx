import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Apod from './Apod'
import Observations from './Observations'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/observations" element={<Observations />} />
          <Route path="/apod" element={<Apod />} />
        </Routes>
      </div>
    </>
  )
}

export default App
