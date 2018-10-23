import React from 'react'
import aboutImg from '../../images/banner/about.jpg'

const About = () => (
  <div className="about-area ptb-95">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6">
          <div className="about-content pr-30">
            <h2>About Basmoti Restaurant </h2>
            <h3> Basmoti ensures healthy environment. Make a short trip. </h3>
            <div className="about-peragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet dolor libero, eget loved dost venenatis mauris finibus
                dictum. Vestibulum quis elit eget neque porttitor no amet dolor
                Proin pretium.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet dolor libero, eget loved dost venenatis mauris finibus
                dictum.
              </p>
              <div className="default-btn-style mt-35">
                <a href="#">read more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-img">
            <img alt="" src={aboutImg} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
