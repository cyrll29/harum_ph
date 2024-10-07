import React from 'react'
import NavBar from '../../components/navBar/navBar'
import './home.css';
import Perfume from '../../assets/perfume.png'

const home = () => {
  return (
    <>
        <NavBar />
        <div className="home-body">
          <div className="home-header">
            <div className="home-header-tagline">
              <h1>Unlock the Essence &#8208;</h1>
              <p>Discover, Explore, and Savor <br/>Every Scent.</p>
            </div>
            <div className="home-header-image">
              <img src={Perfume} alt="Perfume" />
            </div>
          </div>

          <div className="content-1">
            <div className="grid-container">
              <div className="grid one">
                1
              </div>
              <div className="grid one">
                1
              </div>
              <div className="grid two">
                <div className="grid-2-inside">
  
                </div>
              </div>
              <div className="grid three">
                <div className="grid-3-inside">
  
                </div>
              </div>
              <div className="grid four">
                <div className="grid-4-inside">
  
                </div>
              </div>
              <div className="grid five">
                <div className="grid-5-inside">
  
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default home