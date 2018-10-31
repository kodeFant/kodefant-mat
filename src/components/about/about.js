import React from 'react'

import styles from './about.module.css'
import aboutImg from '../../images/banner/about.jpg'

const About = () => (
  <div className={`${styles.about_area} ${styles.ptb_95}`}>
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-6">
          <div className={`${styles.about_content} ${styles.pr_30}`}>
            <h2>Om din restaurant</h2>
            <h3>Hva gjør restauranten din spesiell? Beskriv dine verdier.</h3>
            <div>
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
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.about_img}>
            <img alt="" src={aboutImg} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
