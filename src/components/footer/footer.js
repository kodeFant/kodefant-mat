import React from 'react'
import styles from './footer.module.css'

const footer = () => {
  return (
    <footer className={styles.footer_area}>
      <div
        className={`footer-area-top ${styles.black_bg} ${styles.pt_95} ${
          styles.pb_60
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`${styles.footer_title} ${styles.mb_30}`}>
                  <h4>About Us</h4>
                </div>
                <div className={styles.footer_about}>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consecte adipisicing elit, sed
                    do tempor eget loved dost venenatis.
                  </p>
                  <div className={styles.footer_map}>
                    <a href="contact.html">
                      <i className="ion-ios-location-outline" /> View on map
                    </a>
                  </div>
                </div>
                <div className={styles.social_icon}>
                  <ul>
                    <li>
                      <a className={styles.facebook} href="#">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className={styles.twitter} href="#">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className={styles.instagram} href="#">
                        <i className="ion-social-instagram-outline" />
                      </a>
                    </li>
                    <li>
                      <a className={styles.googleplus} href="#">
                        <i className="ion-social-googleplus-outline" />
                      </a>
                    </li>
                    <li>
                      <a className={styles.dribbble} href="#">
                        <i className="ion-social-dribbble-outline" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`${styles.footer_title} ${styles.mb_30}`}>
                  <h4>contact Us</h4>
                </div>
                <div className={styles.footer_cont_info}>
                  <div className={styles.single_footer_cont_info}>
                    <div className={styles.cont_info_icon}>
                      <i className="fa fa-home" />
                    </div>
                    <div className={styles.cont_info_content}>
                      <p>Elizabeth Tower. 6th Floor Medtown, New York</p>
                    </div>
                  </div>
                  <div className={styles.single_footer_cont_info}>
                    <div className={styles.cont_info_icon}>
                      <i className="fa fa-phone" />
                    </div>
                    <div className={styles.cont_info_content}>
                      <p>+088 01673-453290</p>
                      <p>+088 01673-453290</p>
                    </div>
                  </div>
                  <div className={styles.single_footer_cont_info}>
                    <div className={styles.cont_info_icon}>
                      <i className="fa fa-envelope" />
                    </div>
                    <div className={styles.cont_info_content}>
                      <a href="#">Basmoti@email.com</a>
                      <a href="#">info@example.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`footer-title ${styles.mb_30}`}>
                  <h4>Opening Time</h4>
                </div>
                <div className={`${styles.open_time} ${styles.pr_30}`}>
                  <ul>
                    <li>
                      Saturday
                      <span>9am - 11pm</span>
                    </li>
                    <li>
                      Sunday
                      <span>Close</span>
                    </li>
                    <li>
                      Monday
                      <span>9am - 11pm</span>
                    </li>
                    <li>
                      Tuesday
                      <span>9am - 11pm</span>
                    </li>
                    <li>
                      Wednesday
                      <span>9am - 11pm</span>
                    </li>
                    <li>
                      Thursday
                      <span>9am - 11pm</span>
                    </li>
                    <li>
                      Friday
                      <span>9am - 11pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`footer-title ${styles.mb_30}`}>
                  <h4>Newsletter</h4>
                </div>
                <div className={styles.newsletter_style}>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consecte adipisicing elit, sed
                    do.
                  </p>
                  <div id="mc_embed_signup" className={styles.subscribe_form}>
                    <form
                      id="mc-embedded-subscribe-form"
                      className="validate"
                      noValidate=""
                      target="_blank"
                      name="mc-embedded-subscribe-form"
                      method="post"
                      action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                    >
                      <div id="mc_embed_signup_scroll" className="mc-form">
                        <input
                          className="email"
                          type="email"
                          required=""
                          placeholder="Enter your email"
                          name="EMAIL"
                        />
                        <div className="mc-news" aria-hidden="true">
                          <input
                            type="hidden"
                            value=""
                            tabIndex="-1"
                            name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                          />
                        </div>
                        <div className={styles.clear}>
                          <input
                            id="mc-embedded-subscribe"
                            className={styles.button}
                            type="submit"
                            name="subscribe"
                            value="Subscribe"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`footer-bottom ${styles.black_bg_2} ${styles.pb_25} ${
          styles.pt_25
        }`}
      >
        <div className="container">
          <div className={`${styles.copyright} text-center`}>
            <p>
              Copyright © <a href="#">Basmoti</a>. All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
