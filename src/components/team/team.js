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
        <h2>Vis fram vinnerlaget</h2>
        <p>
          Restauranten din blir drevet fram av dyktige og dedikerte ansatte.
          Fremhev dem og gi dem eierskap til det dere skaper sammen.
        </p>
      </div>
      <div className="row">{teamMembers}</div>
    </div>
  </div>
)

export default team
