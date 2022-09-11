import React from 'react'
import Aside from './Aside'
import Centre from './Centre'
import Navigation from './Navigation'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <Navigation />
        </div>
        <div>
          <Centre />
        </div>
        <div>
          <Aside />
        </div>
      </div>
    </>
  )
}

export default Home
