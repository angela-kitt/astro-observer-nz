import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="header-container">
        <h1>
          <Link to="/">Astro Observer NZ</Link>
        </h1>
      </div>
    </>
  )
}

export default Header
