import React from 'react'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb/breadcrumb'
import ContactArea from '../components/contactArea/contactArea'

import contactBackground from '../images/banner/breath2.jpg'

const Menu = () => {
  return (
    <Layout main={false}>
      <Breadcrumb
        background={contactBackground}
        parent="Hjem"
        title="Kontakt"
      />
      <ContactArea />
    </Layout>
  )
}

export default Menu
