import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header-container">
        <h1>Astro Observer NZ</h1>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/apod">APOD</Link>
            </li>
            <li>
              {' '}
              <Link to="/moonphase">Phase of the Moon</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
