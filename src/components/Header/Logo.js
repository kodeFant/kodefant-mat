import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo/logo.png'
import logoBlack from '../images/logo/logo-black.png'

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img className="logo-normal" alt="" src={logo} />
      <img className="logo-sticky" alt="" src={logoBlack} />
    </Link>
  </div>
)

export default Logo
