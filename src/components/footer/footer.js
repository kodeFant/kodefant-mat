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
                  <h4>Om oss</h4>
                </div>
                <div className={styles.footer_about}>
                  <p>
                    kodeFant er webutvikler og kan gi restauranten din nettsiden
                    den fortjener.
                  </p>
                  <div className={styles.footer_map}>
                    <a href="contact">
                      <i className="ion-ios-location-outline" /> Vis på kart
                    </a>
                  </div>
                </div>
                <div className={styles.social_icon}>
                  <ul>
                    <li>
                      <a
                        className={styles.facebook}
                        target="_blank"
                        href="https://www.facebook.com/kodefant"
                        rel="noopener noreferrer"
                      >
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.twitter}
                        target="_blank"
                        href="https://www.twitter.com/larsparsfromage"
                        rel="noopener noreferrer"
                      >
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.instagram}
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="ion-social-instagram-outline" />
                      </a>
                    </li>
                    <li>
                      <a
                        className={styles.googleplus}
                        href="#"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="ion-social-googleplus-outline" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`${styles.footer_title} ${styles.mb_30}`}>
                  <h4>Kontakt</h4>
                </div>
                <div className={styles.footer_cont_info}>
                  <div className={styles.single_footer_cont_info}>
                    <div className={styles.cont_info_icon}>
                      <i className="fa fa-home" />
                    </div>
                    <div className={styles.cont_info_content}>
                      <p>
                        Oslo gate 42, <br />
                        1111 Oslo
                      </p>
                    </div>
                  </div>
                  <div className={styles.single_footer_cont_info}>
                    <div className={styles.cont_info_icon}>
                      <i className="fa fa-phone" />
                    </div>
                    <div className={styles.cont_info_content}>
                      <p>+47 1234-5678</p>
                    </div>
                  </div>
                  <div className={styles.single_footer_cont_info}>
                    <div className={styles.cont_info_icon}>
                      <i className="fa fa-envelope" />
                    </div>
                    <div className={styles.cont_info_content}>
                      <a href="#">Basmoti@email.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`${styles.footer_title} ${styles.mb_30}`}>
                  <h4>Åpningstider</h4>
                </div>
                <div className={`${styles.open_time} ${styles.pr_30}`}>
                  <ul>
                    <li>
                      Lørdag
                      <span>Stengt</span>
                    </li>
                    <li>
                      Søndag
                      <span>Stengt</span>
                    </li>
                    <li>
                      Mandag
                      <span>19:00 - 01:00</span>
                    </li>
                    <li>
                      Tirsdag
                      <span>19:00 - 01:00</span>
                    </li>
                    <li>
                      Onsdag
                      <span>19:00 - 01:00</span>
                    </li>
                    <li>
                      Torsdag
                      <span>19:00 - 01:00</span>
                    </li>
                    <li>
                      Fredag
                      <span>19:00 - 01:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className={`footer-widget ${styles.mb_40}`}>
                <div className={`${styles.footer_title} ${styles.mb_30}`}>
                  <h4>Nyhetsbrev</h4>
                </div>
                <div className={styles.newsletter_style}>
                  <p>
                    Om du ønsker, kan du sette opp et nyhetsbrev for kundene
                    dine med spesialtilbud.
                  </p>
                  <div className={styles.subscribe_form}>
                    <form className="validate">
                      <div id="mc_embed_signup_scroll" className="mc-form">
                        <input
                          className="email"
                          type="email"
                          required=""
                          placeholder="Din epost-adresse"
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
                            className={styles.button}
                            value="Subscribe"
                            type="button"
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
              2018 © <a href="https://www.kodefant.no">Lars Lillo Ulvestad</a>.
              Alle rettigheter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
