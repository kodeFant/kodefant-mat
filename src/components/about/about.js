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
                I en gate i din by finnes det en unik restaurant som ble startet
                fordi de så behovet for god mat. Å lese om oppstarten, ideene og
                kanskje noen morsomme fakta gir ekstra verdi for
                kundeopplevelsen.
              </p>
              <p>
                Lager dere mat ut fra en bestemt kultur eller mattradisjon,
                eller slik deres bestemor lagde det? Fortell om det!
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
