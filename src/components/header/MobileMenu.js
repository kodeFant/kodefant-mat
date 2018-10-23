import React from 'react'
import NavMenu from './NavMenu'
import PropTypes from 'prop-types'

const MobileMenu = props => (
  <div className={`${props.styles.mobile_menu} ${props.styles.mean_container}`}>
    <NavMenu mobile styles={props.styles} />
  </div>
)

MobileMenu.propTypes = {
  styles: PropTypes.object,
}

export default MobileMenu
