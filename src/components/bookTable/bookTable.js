import React from 'react'

import styles from './bookTable.module.css'

import tableImg from '../../images/banner/table.png'

const bookTable = () => (
  <div
    className={`${styles.book_table} ${styles.ptb_100} ${styles.bg_img}`}
    id="book"
  >
    <div className="container">
      <div className={`${styles.section_title} text-center ${styles.mb_50}`}>
        <h2>Reservér</h2>
        <p>
          Ønsker du å la kunden bestille bord på nett? Det finnes løsninger for
          dette som gjør at du enkelt kan administrere bordreservasjon på ett
          sted.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className={styles.reserve_form}>
            <h3 className={styles.reserv_title}>Reserver bord</h3>
            <form action="#">
              <div className={styles.reserve_form_top}>
                <input type="text" placeholder="Fullt navn" />
                <input type="email" placeholder="Epost-adresse" />
                <input type="text" placeholder="Mobilnummer" />
                <div className={styles.date_time}>
                  <select>
                    <option defaultValue="">Velg tid og sted</option>
                    <option>26. des - 10:00</option>
                    <option>2. jan - 10:00</option>
                    <option>17 des - 10:00</option>
                  </select>
                </div>
              </div>
              <div className={`${styles.reserve_submit} ${styles.mt_40}`}>
                <button type="submit"> Send reservasjon </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.book_img}>
            <img src={tableImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default bookTable
