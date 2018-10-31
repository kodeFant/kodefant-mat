import React from 'react'
import PropTypes from 'prop-types'

const contactAreaInfo = props => (
  <div className={props.styles.contact_info_area}>
    <h4 className={`${props.styles.contact_title} ${props.styles.mb_18}`}>
      Kontakt
    </h4>
    <p>
      La kundene stille deg spørsmål på epost og gjør det lett for dem å finne
      restauranten din.
    </p>
    <div className={props.styles.contact_info_wrap}>
      <div
        className={`${props.styles.single_contact_info} ${props.styles.mb_40}`}
      >
        <div className={props.styles.contact_info_icon}>
          <i className="fa fa-map-marker" />
        </div>
        <div className={props.styles.contact_info_content}>
          <h4>Location :</h4>
          <p>77, seventh avenue, Road USA.</p>
        </div>
      </div>
      <div
        className={`${props.styles.single_contact_info} ${props.styles.mb_35}`}
      >
        <div className={props.styles.contact_info_icon}>
          <i className="fa fa-phone" />
        </div>
        <div className={props.styles.contact_info_content}>
          <h4>phone :</h4>
          <p>+00 111 222 333 44</p>
          <p>+00 111 222 333 44</p>
        </div>
      </div>
      <div className={props.styles.single_contact_info}>
        <div className={props.styles.contact_info_icon}>
          <i className="fa fa-envelope" />
        </div>
        <div className={props.styles.contact_info_content}>
          <h4>mail :</h4>
          <p>
            <a href="#">yourmail@gmail.com</a>
          </p>
          <p>
            <a href="#">info@example.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

contactAreaInfo.propTypes = {
  styles: PropTypes.object,
}

export default contactAreaInfo
