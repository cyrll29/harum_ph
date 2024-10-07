import React from 'react'
import NavBar from '../../components/navBar/navBar'
import './home.css';

const home = () => {
  return (
    <>
        <NavBar />
        <div className="home-body">
          <div className="home-header">
            <div className="home-header-tagline">
              <h1>Unlock the Essence: <br/>Discover, Explore, and Savor <br/>Every Scent.</h1>
            </div>
          </div>
        </div>
    </>
  )
}

export default home