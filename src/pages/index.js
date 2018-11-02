import React from 'react'

import Layout from '../components/layout'

import Testimonials from '../components/testimonials/testimonials'
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
    background: slider2,
    topHeader: 'Ønsk <span>velkommen</span>',
    bottomHeader: '<span>Apetittelig</span> førsteinntrykk',
    paragraph:
      'En nettside kan være det første dine kommende spisegjester ser av restauranten din. Gi dem gode grunner til å besøke.',
    buttonText: 'Din meny på nett',
    buttonLink: '/meny',
  },
  {
    id: '2',
    index: 4,
    background: slider1,
    topHeader: 'Vis dine <span>verdier</span>',
    bottomHeader: 'Skap en <span>unik</span> opplevelse',
    paragraph: 'Vis hva som skiller deg fra konkurrentene.',
    buttonText: 'Om din restaurant',
    buttonLink: '/om',
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
    <Testimonials />
  </Layout>
)

export default IndexPage
