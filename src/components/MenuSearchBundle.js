import React, { Component } from 'react'
import styles from './MenuSearchBundle.module.css'

class MenuSearchBundle extends Component {
  constructor(props) {
    super(props)
    this.state = { showSearchBar: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ showSearchBar: !this.state.showSearchBar })
  }

  render() {
    return (
      <div className="menu-search-bundle">
        <div className="main-menu">
          <nav>
            <ul>
              <li className="top-hover">
                <a href="index.html">
                  home <i className="ion-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="index.html">home version 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">home version 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">home version 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about-us.html">about</a>
              </li>
              <li className="mega-menu-position top-hover">
                <a href="menu.html">
                  menu <i className="ion-chevron-down" />
                </a>
                <ul className="mega-menu">
                  <li>
                    <ul>
                      <li className="mega-menu-title">
                        <a href="#">menu list 01</a>
                      </li>
                      <li>
                        <a href="menu.html">salad</a>
                      </li>
                      <li>
                        <a href="menu.html">sandwich</a>
                      </li>
                      <li>
                        <a href="menu.html">bread</a>
                      </li>
                      <li>
                        <a href="menu.html">steak</a>
                      </li>
                      <li>
                        <a href="menu.html">tuna steak</a>
                      </li>
                      <li>
                        <a href="menu.html">spaghetti </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="mega-menu-title">
                        <a href="#">menu list 02</a>
                      </li>
                      <li>
                        <a href="menu.html">rice</a>
                      </li>
                      <li>
                        <a href="menu.html">pizza</a>
                      </li>
                      <li>
                        <a href="menu.html">hamburger</a>
                      </li>
                      <li>
                        <a href="menu.html">eggs</a>
                      </li>
                      <li>
                        <a href="menu.html">sauces</a>
                      </li>
                      <li>
                        <a href="menu.html">apple juice</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="mega-menu-title">
                        <a href="#">menu list 03</a>
                      </li>
                      <li>
                        <a href="menu.html">milk</a>
                      </li>
                      <li>
                        <a href="menu.html">grape juice</a>
                      </li>
                      <li>
                        <a href="menu.html">cookie</a>
                      </li>
                      <li>
                        <a href="menu.html">candy</a>
                      </li>
                      <li>
                        <a href="menu.html">cake</a>
                      </li>
                      <li>
                        <a href="menu.html">cupcake</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="mega-menu-title">
                        <a href="#">menu list 04</a>
                      </li>
                      <li>
                        <a href="menu.html">pie</a>
                      </li>
                      <li>
                        <a href="menu.html">strawberry</a>
                      </li>
                      <li>
                        <a href="menu.html">sandwich</a>
                      </li>
                      <li>
                        <a href="menu.html">bread</a>
                      </li>
                      <li>
                        <a href="menu.html">steak</a>
                      </li>
                      <li>
                        <a href="menu.html">hamburger</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="top-hover">
                <a href="blog.html">
                  blog <i className="ion-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="blog-no-sidebar.html">Blog No sidebar</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog sidebar</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog details</a>
                  </li>
                </ul>
              </li>
              <li className="top-hover">
                <a href="#">
                  pages <i className="ion-chevron-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="about-us.html">about us </a>
                  </li>
                  <li>
                    <a href="menu.html">menu style 1</a>
                  </li>
                  <li>
                    <a href="menu-2.html">menu style 2</a>
                  </li>
                  <li>
                    <a href="gallery.html">gallery style 1</a>
                  </li>
                  <li>
                    <a href="gallery-2.html">gallery style 2</a>
                  </li>
                  <li>
                    <a href="contact.html">contact us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">contact us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search-wrap">
          <button className="search-toggle" onClick={this.handleClick}>
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
      </div>
    )
  }
}

export default MenuSearchBundle
