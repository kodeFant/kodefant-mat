import React from 'react'
import Layout from '../components/layout'
import FoodMenu from '../components/foodMenu/foodMenu'
import Breadcrumb from '../components/breadcrumb/breadcrumb'

const Menu = () => {
  return (
    <Layout main={false}>
      <Breadcrumb />
      <FoodMenu />
    </Layout>
  )
}

export default Menu
