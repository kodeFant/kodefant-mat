import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo/logo.png'
import logoBlack from '../../images/logo/logo-black.png'
import PropTypes from 'prop-types'

const Logo = props => (
  <div className={`${props.styles.logo}`}>
    <Link to="/">
      <img
        className={`${props.styles.logo_normal}`}
        alt=""
        src={props.main ? logo : logoBlack}
      />
      <img className={`${props.styles.logo_sticky}`} alt="" src={logoBlack} />
    </Link>
  </div>
)

Logo.propTypes = {
  styles: PropTypes.object,
  main: PropTypes.bool,
}

export default Logo
