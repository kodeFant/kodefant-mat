import React from 'react'
import logo from "../images/logo/logo.png"
import logoBlack from "../images/logo/logo-black.png"
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
<header className="header-area transparent-bar header-position">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-5 col-sm-4">
        <div className="logo">
          <a href="index.html">
            <img className="logo-normal" alt="" src={logo} />
                                <img className="logo-sticky" alt="" src={logoBlack} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-7 col-sm-8">
                        <div className="menu-search-bundle">
                            <div className="main-menu">
                                <nav>
                                    <ul>
                                        <li className="top-hover"><a href="index.html">home <i className="ion-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="index.html">home version 1</a></li>
                                                <li><a href="index-2.html">home version 2</a></li>
                                                <li><a href="index-3.html">home version 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="about-us.html">about</a></li>
                                        <li className="mega-menu-position top-hover"><a href="menu.html">menu <i className="ion-chevron-down"></i></a>
                                            <ul className="mega-menu">
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">menu list 01</a></li>
                                                        <li><a href="menu.html">salad</a></li>
                                                        <li><a href="menu.html">sandwich</a></li>
                                                        <li><a href="menu.html">bread</a></li>
                                                        <li><a href="menu.html">steak</a></li>
                                                        <li><a href="menu.html">tuna steak</a></li>
                                                        <li><a href="menu.html">spaghetti </a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">menu list 02</a></li>
                                                        <li><a href="menu.html">rice</a></li>
                                                        <li><a href="menu.html">pizza</a></li>
                                                        <li><a href="menu.html">hamburger</a></li>
                                                        <li><a href="menu.html">eggs</a></li>
                                                        <li><a href="menu.html">sauces</a></li>
                                                        <li><a href="menu.html">apple juice</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">menu list 03</a></li>
                                                        <li><a href="menu.html">milk</a></li>
                                                        <li><a href="menu.html">grape juice</a></li>
                                                        <li><a href="menu.html">cookie</a></li>
                                                        <li><a href="menu.html">candy</a></li>
                                                        <li><a href="menu.html">cake</a></li>
                                                        <li><a href="menu.html">cupcake</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li className="mega-menu-title"><a href="#">menu list 04</a></li>
                                                        <li><a href="menu.html">pie</a></li>
                                                        <li><a href="menu.html">strawberry</a></li>
                                                        <li><a href="menu.html">sandwich</a></li>
                                                        <li><a href="menu.html">bread</a></li>
                                                        <li><a href="menu.html">steak</a></li>
                                                        <li><a href="menu.html">hamburger</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="top-hover"><a href="blog.html">blog <i className="ion-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="blog-no-sidebar.html">Blog No sidebar</a></li>
                                                <li><a href="blog.html">Blog sidebar</a></li>
                                                <li><a href="blog-details.html">Blog details</a></li>
                                            </ul>
                                        </li>
                                        <li className="top-hover"><a href="#">pages <i className="ion-chevron-down"></i></a>
                                            <ul className="submenu">
                                                <li><a href="about-us.html">about us </a></li>
                                                <li><a href="menu.html">menu style 1</a></li>
                                                <li><a href="menu-2.html">menu style 2</a></li>
                                                <li><a href="gallery.html">gallery style 1</a></li>
                                                <li><a href="gallery-2.html">gallery style 2</a></li>
                                                <li><a href="contact.html">contact us</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact us</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="search-wrap">
                                <button className="search-toggle">
                                    <i className="fa fa-search"></i>
                                </button>
                                <div className="search">
                                    <form action="#">
                                        <input type="search" placeholder="Search here" />
                                        <button type="submit">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-area d-md-block d-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul className="menu-overflow">
                                    <li><a href="#">HOME</a>
                                        <ul>
                                            <li><a href="index.html">home version 1</a></li>
                                            <li><a href="index-2.html">home version 2</a></li>
                                            <li><a href="index-3.html">home version 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">pages</a>
                                        <ul>
                                            <li><a href="about-us.html">about us </a></li>
                                            <li><a href="menu.html">menu style 1</a></li>
                                            <li><a href="menu-2.html">menu style 2</a></li>
                                            <li><a href="gallery.html">gallery style 1</a></li>
                                            <li><a href="gallery-2.html">gallery style 2</a></li>
                                            <li><a href="contact.html">contact us</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">menu</a>
                                        <ul>
                                            <li><a href="#">menu list 01</a>
                                                <ul>
                                                    <li><a href="menu.html">salad</a></li>
                                                    <li><a href="menu.html">sandwich</a></li>
                                                    <li><a href="menu.html">bread</a></li>
                                                    <li><a href="menu.html">steak</a></li>
                                                    <li><a href="menu.html">tuna steak</a></li>
                                                    <li><a href="menu.html">spaghetti </a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">menu list 02</a>
                                                <ul>
                                                    <li><a href="menu.html">rice</a></li>
                                                    <li><a href="menu.html">pizza</a></li>
                                                    <li><a href="menu.html">hamburger</a></li>
                                                    <li><a href="menu.html">eggs</a></li>
                                                    <li><a href="menu.html">sauces</a></li>
                                                    <li><a href="menu.html">apple juice</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">menu list 03</a>
                                                <ul>
                                                    <li><a href="menu.html">milk</a></li>
                                                    <li><a href="menu.html">grape juice</a></li>
                                                    <li><a href="menu.html">cookie</a></li>
                                                    <li><a href="menu.html">candy</a></li>
                                                    <li><a href="menu.html">cake</a></li>
                                                    <li><a href="menu.html">cupcake</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">menu list 04</a>
                                                <ul>
                                                    <li><a href="menu.html">pie</a></li>
                                                    <li><a href="menu.html">strawberry</a></li>
                                                    <li><a href="menu.html">sandwich</a></li>
                                                    <li><a href="menu.html">bread</a></li>
                                                    <li><a href="menu.html">steak</a></li>
                                                    <li><a href="menu.html">hamburger</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#">blog</a>
                                        <ul>
                                            <li><a href="blog-no-sidebar.html">Blog No sidebar</a></li>
                                            <li><a href="blog.html">Blog sidebar</a></li>
                                            <li><a href="blog-details.html">Blog details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html"> Contact us </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
</header>
)

export default Header
