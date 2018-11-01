import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
import About from '../components/about/about'
import Team from '../components/team/team'
import OurServices from '../components/ourServices/ourServices'

const Menu = () => {
  return (
    <Layout main={false}>
      <Breadcrumb parent="Hjem" title="Om" />
      <About />
      <Team />
      <OurServices />
    </Layout>
  )
}

export default Menu
