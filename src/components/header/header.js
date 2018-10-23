import React, { Component } from 'react'
import Logo from './Logo'
import MenuSearchBundle from './MenuSearchBundle'
import MobileMenu from './MobileMenu'

import styles from './header.module.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      stick: '',
      mobileMenuOpen: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (event.srcElement.scrollingElement.scrollTop < 200) {
      this.setState({ stick: '' })
    } else {
      this.setState({ stick: 'stick' })
    }
  }

  handleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  render() {
    const mobileMenuOpen = this.state.mobileMenuOpen
    return (
      <header
        className={`
          header-area
          transparent-bar
          ${styles.header_position}
          ${this.state.stick}
        `}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-5 col-sm-4">
              <Logo />
            </div>
            <div className="col-lg-9 col-md-8 col-7 col-sm-8">
              <MenuSearchBundle
                hamburgerClick={this.handleMobileMenu.bind(this)}
                mobileOpen={mobileMenuOpen}
              />
            </div>
            {this.state.mobileMenuOpen ? (
              <div className="mobile-menu-area d-md-block d-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                <MobileMenu />
              </div>
            ) : null}
          </div>
        </div>
      </header>
    )
  }
}

export default Header
