import React from 'react'
import './navBar.css'

const navBar = () => {
  return (
    <div className='nav-bar'>
      <div className="nav-bar-title">
        <h1>Harum</h1>
      </div>
      <div className="nav-bar-components">
        <div className="links">
          <a href="/">Home</a>
        </div>
        <div className="links">
          <a href="/">Brands</a>
        </div>
        <div className="links">
          <a href="/">About us</a>
        </div>
        <div className="links">
          <a href="/">
            <button className='border'>LOG IN</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default navBar