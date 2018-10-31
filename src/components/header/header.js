import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Logo from './Logo'
import MenuSearchBundle from './MenuSearchBundle'
import MobileMenu from './MobileMenu'

import styles from './header.module.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      stick: false,
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
    if (
      event.srcElement.scrollingElement.scrollTop < 200 &&
      this.state.stick === true
    ) {
      this.setState({ stick: false })
    } else if (
      event.srcElement.scrollingElement.scrollTop >= 200 &&
      this.state.stick === false
    ) {
      this.setState({ stick: true })
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
        className={
          this.props.main
            ? `
          header-area
          ${styles.transparent_bar}
          ${styles.header_position}
          ${this.state.stick ? styles.stick : null}
            `
            : `
        header-area
        ${styles.transparent_bar}
        ${styles.header_black}
        ${this.state.stick ? styles.stick : null}
            `
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-5 col-sm-4">
              <Logo styles={styles} main={this.props.main} />
            </div>
            <div className="col-lg-9 col-md-8 col-7 col-sm-8">
              <MenuSearchBundle
                hamburgerClick={this.handleMobileMenu.bind(this)}
                mobileOpen={mobileMenuOpen}
                styles={styles}
                stick={this.state.stick}
                main={this.props.main}
              />
            </div>
            {this.state.mobileMenuOpen ? (
              <div className="mobile-menu-area d-md-block d-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                <MobileMenu styles={styles} />
              </div>
            ) : null}
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  main: PropTypes.bool,
}

export default Header
