import React from 'react'
import Swiper from 'react-id-swiper'

import PopularProductCard from './popularProductCard'

import ProductImg1 from '../../images/product/pro-1.jpg'
import ProductImg2 from '../../images/product/pro-2.jpg'
import ProductImg3 from '../../images/product/pro-3.jpg'
import ProductImg4 from '../../images/product/pro-4.jpg'
import ProductImg5 from '../../images/product/pro-5.jpg'
import PopularImg from '../../images/banner/popular.png'

import styles from './popularProducts.module.css'

const productsData = [
  {
    id: 1,
    image: ProductImg1,
    name: 'Oldtimer with Cheese',
    description: 'Chicken meat which is breaded or battered, then deep.',
    price: 100,
  },
  {
    id: 2,
    image: ProductImg2,
    name: 'Black Bean Fajitas',
    description: 'Chicken meat which is breaded or battered, then deep.',
    price: 200,
  },
  {
    id: 3,
    image: ProductImg3,
    name: 'Chicken Nugget',
    description: 'Chicken meat which is breaded or battered, then deep.',
    price: 300,
  },
  {
    id: 4,
    image: ProductImg4,
    name: 'Match Fajita Trio',
    description: 'Chicken meat which is breaded or battered, then deep.',
    price: 150,
  },
  {
    id: 5,
    image: ProductImg5,
    name: 'Match Fajita Trio',
    description:
      'Chicken meat which is breaded or battered, then deep-fried or baked.',
    price: 50,
  },
]

const popularProduct = () => {
  const params = {
    slidesPerView: 3,
    speed: 2000,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  }

  const allProducts = productsData.map(product => {
    return (
      <div key={product.id}>
        <PopularProductCard
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          styles={styles}
        />
      </div>
    )
  })
  return (
    <div
      className={`
        ${styles.popular_product}
        ${styles.gray_bg}
        ${styles.pt_100}
        ${styles.pb_100}`}
    >
      <div className="container">
        <div
          className={`
          ${styles.section_title}
          text-center
          ${styles.mb_50}`}
        >
          <h2>Our Popular Dishes</h2>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
        <Swiper {...params}>{allProducts}</Swiper>
      </div>
      <div className={`${styles.popular_bg_img}`}>
        <img alt="" src={PopularImg} />
      </div>
    </div>
  )
}

export default popularProduct
