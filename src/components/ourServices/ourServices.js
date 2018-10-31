import React from 'react'
import styles from './ourServices.module.css'

import SingleService from './singleService'

const data = [
  {
    id: 1,
    title: '100% healthy food',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    iconClasses: 'fa fa-cutlery',
  },
  {
    id: 2,
    title: 'Our Services',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    iconClasses: 'fa fa-cogs',
  },
  {
    id: 3,
    title: 'healthy environment',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
    iconClasses: 'fa fa-heart-o',
  },
]

const ourServices = () => (
  <div className={`${styles.pt_100} ${styles.pb_70}`}>
    <div className="container">
      <div className={`${styles.section_title} text-center ${styles.mb_50}`}>
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim nostrud exercitation ullamco laboris nisi.
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
