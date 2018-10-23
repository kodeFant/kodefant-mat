import React from 'react'
import MenuItem from './MenuItem'

const homeSubmenu = [
  { name: 'home version 1', link: '/', id: 1 },
  { name: 'home version 2', link: 'index2', id: 2 },
  { name: 'home version 3', link: 'index3', id: 3 },
]

const blogSubmenu = [
  { name: 'Blog No Sidebar', link: 'blog-no-sidebar', id: 1 },
  { name: 'Blog sidebar', link: 'blog', id: 2 },
  { name: 'Blog details', link: 'blog-details', id: 3 },
]

const pagesSubmenu = [
  { name: 'about us', link: 'about', id: 1 },
  { name: 'menu style 1', link: 'menu', id: 2 },
  { name: 'menu style 2', link: 'menu-2', id: 3 },
  { name: 'gallery style 1', link: 'gallery', id: 4 },
  { name: 'gallery style 2', link: 'gallery-2', id: 5 },
]

const NavMenu = props => (
  <nav className={props.mobile ? 'mean-nav' : null}>
    <ul className={props.mobile ? 'menu-overflow' : null}>
      <MenuItem name="home" link="/" submenu={homeSubmenu} {...props} />
      <MenuItem name="about" link="about" {...props} />
      <MenuItem name="menu" link="menu" {...props} />
      <MenuItem name="blog" link="blog" submenu={blogSubmenu} {...props} />
      <MenuItem name="pages" link="/" submenu={pagesSubmenu} {...props} />
      <MenuItem name="contact us" link="contact" {...props} />
    </ul>
  </nav>
)

export default NavMenu
