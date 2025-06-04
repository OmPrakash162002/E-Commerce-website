import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import "./Hero.css"


function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
          <h2>New Arrivels Only</h2>
          <div className="hero-left-icons">
            <p>new  <img src="hand.png" alt="" /> <br /> collections <br /> for everyone</p>
          </div>
          <button className='letest-collection-button'>letest Collection <FaArrowRight/> </button>
      </div>
      <div className="hero-right">
          <img src="model.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
