import React from 'react'

import styles from './team.module.css'
import { data } from './dummyData/data'

import TeamMember from './teamMember'

const teamMembers = data.map(member => {
  return (
    <TeamMember
      key={member.id}
      image={member.image}
      name={member.name}
      title={member.title}
      styles={styles}
    />
  )
})

const team = () => (
  <div className={`${styles.pt_100} ${styles.pb_70} ${styles.gray_bg}`}>
    <div className="container">
      <div className={`${styles.section_title} text-center ${styles.mb_50}`}>
        <h2>Our Lovely team</h2>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="row">{teamMembers}</div>
    </div>
  </div>
)

export default team
