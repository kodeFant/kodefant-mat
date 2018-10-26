import React from 'react'

import styles from './bookTable.module.css'
import bookTableImg from '../../images/banner/book-a-table.jpg'
import tableImg from '../../images/banner/table.png'

const bookTable = () => (
  <div
    className={`${styles.book_table} ${styles.ptb_100} ${styles.bg_img}`}
    id="book"
    style={{ backgroundImage: `url(${bookTableImg})` }}
  >
    <div className="container">
      <div className={`${styles.section_title} text-center ${styles.mb_50}`}>
        <h2>book a table</h2>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className={styles.reserve_form}>
            <h3 className={styles.reserv_title}>Reservation Form</h3>
            <form action="#">
              <div className={styles.reserve_form_top}>
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Mobile number" />
                <div className={styles.date_time}>
                  <select>
                    <option defaultValue="">Select Date And Time</option>
                    <option>26 Dec - 10.00pm</option>
                    <option>2 Jan - 10.00pm</option>
                    <option>17 Dec - 10.00pm</option>
                  </select>
                </div>
              </div>
              <div className={`${styles.reserve_submit} ${styles.mt_40}`}>
                <button type="submit"> submit </button>
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
