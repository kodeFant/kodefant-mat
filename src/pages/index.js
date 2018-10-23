import React from 'react'

import Layout from '../components/layout'

import About from '../components/about/about'
import PopularProducts from '../components/popularProducts/popularProducts'
import FoodMenu from '../components/foodMenu/foodMenu'

import Slider from '../components/slider/slider'
/*********************
  Slider Dummy Data 
*********************/
import slider1 from '../images/slider/slider-1.jpg'
import slider2 from '../images/slider/slider-2.jpg'
const Slides = [
  {
    id: '1',
    index: 3,
    background: slider1,
    topHeader: 'Welcome to <span>Basmoti</span> Restaurant',
    bottomHeader: '<span>Hot & spicy</span> food for you',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis,eu condimentum. lorem ipsum dolor. lorem ipsum dolor sit amt.',
    buttonText: 'read more',
  },
  {
    id: '2',
    index: 4,
    background: slider2,
    topHeader: 'Welcome to <span>Basmoti</span> Restaurant',
    bottomHeader: '<span>Basmoti</span> knows your taste',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis,eu condimentum. lorem ipsum dolor. lorem ipsum dolor sit amt.',
    buttonText: 'read more',
  },
]
/*********************
  /Slider Dummy Data 
*********************/

const IndexPage = () => (
  <Layout>
    <Slider slides={Slides} />
    <About />
    <PopularProducts />
    <FoodMenu />
  </Layout>
)

export default IndexPage
