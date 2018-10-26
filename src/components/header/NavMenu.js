import React from 'react'
import MenuItem from './MenuItem'

const blogSubmenu = [
  { name: 'Blog No Sidebar', link: 'blog-no-sidebar', id: 1 },
  { name: 'Blog sidebar', link: 'blog', id: 2 },
  { name: 'Blog details', link: 'blog-details', id: 3 },
]

const NavMenu = props => (
  <nav className={`${props.mobile ? props.styles.mean_nav : null}`}>
    <ul className={`${props.mobile ? props.styles.menu_overflow : null}`}>
      <MenuItem name="home" link="/" {...props} />
      <MenuItem name="menu" link="menu" {...props} />
      <MenuItem name="about" link="about" {...props} />
      <MenuItem name="blog" link="blog" submenu={blogSubmenu} {...props} />
      <MenuItem name="contact us" link="contact" {...props} />
    </ul>
  </nav>
)

export default NavMenu
