import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        
        {/* Left section */}
        <div className="flexColStart hero-left">
        <div className="hero-title">
    <div className="orange-circle"></div>
    <h1>
        Discover<br /> Most Suitable<br /> Property
    </h1>
</div>

          <div className="flexColStart hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker colors="var{--blue}" size={25}/>
            <input type="text"/>
            <button className="button">Search</button>
          </div>
        </div>

        <div className="flexCenter stats-container">
            <div className="flexColStart stat">
              <span>
                <CountUp start={88000} end={90000} duration={4} />
              </span>
              <span>+</span>
              <span>Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span>Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} duration={4} />
              </span>
              <span>+</span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>


        {/* Right section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="Property" />
          </div>
        </div>

        
    </section>
  )
}

export default Hero
