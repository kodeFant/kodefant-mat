import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo/logo.png'
import logoBlack from '../../images/logo/logo-black.png'
import PropTypes from 'prop-types'

const Logo = props => (
  <div className={`${props.styles.logo}`}>
    <Link to="/">
      <img className={`${props.styles.logo_normal}`} alt="" src={logo} />
      <img className={`${props.styles.logo_sticky}`} alt="" src={logoBlack} />
    </Link>
  </div>
)

Logo.propTypes = {
  styles: PropTypes.object,
}

export default Logo
