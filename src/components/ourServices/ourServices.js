import React from 'react'
import styles from './ourServices.module.css'

import SingleService from './singleService'

const data = [
  {
    id: 1,
    title: 'Kortreist mat',
    text: 'De fleste av våre råvarer kommer fra norske gårder i nærområdet.',
    iconClasses: 'fa fa-cutlery',
  },
  {
    id: 2,
    title: 'Minsker matsvinn',
    text: 'Overskuddsmat går til Kirkens bymisjon.',
    iconClasses: 'fa fa-heart-o',
  },
  {
    id: 3,
    title: 'Gir tilbake',
    text: 'Vi gir én prosent av vårt overskudd til lokale idrettslag.',
    iconClasses: 'fa fa-cogs',
  },
]

const ourServices = () => (
  <div className={`${styles.pt_100} ${styles.pb_70}`}>
    <div className="container">
      <div className={`${styles.section_title} text-center ${styles.mb_50}`}>
        <h2>Dine tjenester</h2>
        <p>
          Hva skiller deg fra konkurrentene? Hvorfor vil noen velge deg? Trekk
          fram tre punkter som gjør at folk bør velge å spise hos deg.
        </p>
      </div>
      <div className="row">
        {data.map(service => {
          return (
            <SingleService
              key={service.id}
              title={service.title}
              text={service.text}
              icon={service.iconClasses}
              styles={styles}
            />
          )
        })}
      </div>
    </div>
  </div>
)

export default ourServices
