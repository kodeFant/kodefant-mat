import React from 'react'
import PropTypes from 'prop-types'

const teamMember = props => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
    <div
      className={`${props.styles.single_team} text-center ${
        props.styles.mb_30
      }`}
    >
      <div className={`${props.styles.team_img_icon} overlay`}>
        <img src={props.image} alt="" />
        <div className={props.styles.team_social_icon}>
          <ul>
            <li>
              <a className={props.styles.facebook} href="#">
                <i className="ion-social-facebook" />
              </a>
            </li>
            <li>
              <a className={props.styles.twitter} href="#">
                <i className="ion-social-twitter" />
              </a>
            </li>
            <li>
              <a className={props.styles.instagram} href="#">
                <i className="ion-social-instagram-outline" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={props.styles.team_info}>
        <h3>{props.name}</h3>
        <span>{props.title}</span>
      </div>
    </div>
  </div>
)

teamMember.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default teamMember
