import React from 'react'
import Layout from '../components/layout'
import FoodMenu from '../components/foodMenu/foodMenu'
import Breadcrumb from '../components/breadcrumb/breadcrumb'

import menuBackground from '../images/banner/breath3.jpg'

const Menu = () => {
  return (
    <Layout main={false}>
      <Breadcrumb background={menuBackground} parent="Hjem" title="Meny" />
      <FoodMenu />
    </Layout>
  )
}

export default Menu
