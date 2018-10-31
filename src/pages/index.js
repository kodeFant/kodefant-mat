import React from 'react'

import Layout from '../components/layout'

import PopularProducts from '../components/popularProducts/popularProducts'
import BookTable from '../components/bookTable/bookTable'

import Slider from '../components/slider/slider'
/*********************
  Slider Dummy Data 
*********************/
import slider1 from '../images/slider/slider-3.jpg'
import slider2 from '../images/slider/slider-1.jpg'
const Slides = [
  {
    id: '1',
    index: 3,
    background: slider1,
    topHeader: 'Ønsk <span>velkommen</span>',
    bottomHeader: '<span>Apetittelig</span> førsteinntrykk',
    paragraph:
      'En nettside kan være det første dine kommende spisegjester ser av restauranten din. Gjør det lett for dem å komme på besøk.',
    buttonText: 'Frist med menyen',
    buttonLink: '/menu',
  },
  {
    id: '2',
    index: 4,
    background: slider2,
    topHeader: 'Vis dine <span>verdier</span>',
    bottomHeader: 'En <span>unik</span> opplevelse',
    paragraph: 'Vis hva som skiller seg ut fra de andre.',
    buttonText: 'Om din restaurant',
    buttonLink: '/about',
  },
]
/*********************
  /Slider Dummy Data 
*********************/

const IndexPage = () => (
  <Layout main={true}>
    <Slider slides={Slides} />
    <PopularProducts />
    <BookTable />
  </Layout>
)

export default IndexPage
