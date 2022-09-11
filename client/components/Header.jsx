import React from 'react'
import { Link } from 'react-router-dom'
import headerImage from '../../server/public/image/southerncross.jpg'

function Header() {
  return (
    <>
      <div className="header-container">
        <h1>
          <Link to="/">
            <img src={headerImage} alt="Astro Observer NZ Header" />
          </Link>
        </h1>
      </div>
    </>
  )
}

export default Header
