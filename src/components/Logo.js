import React from 'react'
import logo from '../images/logo/logo.png'
import logoBlack from '../images/logo/logo-black.png'

const Logo = () => (
  <div className="logo">
    <a href="index.html">
      <img className="logo-normal" alt="" src={logo} />
      <img className="logo-sticky" alt="" src={logoBlack} />
    </a>
  </div>
)

export default Logo
