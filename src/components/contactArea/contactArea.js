import React, { Component } from 'react'
import ContactAreaForm from './contactAreaForm'
import ContactAreaInfo from './contactAreaInfo'
import MapContainer from './mapContainer'

import styles from './contactArea.module.css'

class ContactArea extends Component {
  render() {
    return (
      <div className={styles.pt_100}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={{ display: 'flex' }}>
              <ContactAreaForm styles={styles} />
            </div>
            <div className="col-lg-4">
              <ContactAreaInfo styles={styles} />
            </div>
          </div>
          <MapContainer styles={styles} />
        </div>
      </div>
    )
  }
}

export default ContactArea
