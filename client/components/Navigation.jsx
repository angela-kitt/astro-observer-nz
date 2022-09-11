import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/observations">Observations</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navigation
