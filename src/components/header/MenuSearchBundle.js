import React, { Component } from 'react'
import NavMenu from './NavMenu'
import { HamburgerButton } from 'react-hamburger-button'
import PropTypes from 'prop-types'

import styles from './MenuSearchBundle.module.css'

class MenuSearchBundle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchBar: false,
      menuOpen: true,
    }
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  handleSearchClick() {
    this.setState({ showSearchBar: !this.state.showSearchBar })
  }

  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  render() {
    return (
      <div className="menu-search-bundle">
        <div className="main-menu">
          <NavMenu />
        </div>
        <div className="search-wrap">
          <button className="search-toggle" onClick={this.handleSearchClick}>
            <i className="fa fa-search" />
          </button>
          <div
            className={`search ${
              this.state.showSearchBar ? '' : styles.hidden
            }`}
          >
            <form action="#">
              <input type="search" placeholder="Search here" />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className={styles.hamburger}>
          <HamburgerButton
            open={this.props.mobileOpen}
            onClick={this.props.hamburgerClick}
            width={18}
            height={10}
            strokeWidth={2}
            color="#fff"
            animationDuration={0.5}
          />
        </div>
      </div>
    )
  }
}

MenuSearchBundle.propTypes = {
  hamburgerClick: PropTypes.func,
  mobileOpen: PropTypes.bool,
}

export default MenuSearchBundle
