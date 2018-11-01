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
    name: 'Fritert aubergine',
    description: 'Må prøves! Husets mest solgte favoritt.',
    price: 100,
  },
  {
    id: 2,
    image: ProductImg2,
    name: 'Pizza Terra',
    description: 'Sprø bunn og sesongens grønnsaker.',
    price: 200,
  },
  {
    id: 3,
    image: ProductImg3,
    name: 'Bønnerburger',
    description:
      'Fritystekt bønneburger med friske grønnsaker og himmelsk dressing.',
    price: 300,
  },
  {
    id: 4,
    image: ProductImg4,
    name: 'Fylt portobello',
    description: 'Ovnstekt sopp med delikat fyll.',
    price: 150,
  },
  {
    id: 5,
    image: ProductImg5,
    name: 'Nuddelbolle',
    description: 'Kokte risnudler med stekte grønnsaker.',
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
          <h2>Populære retter</h2>
          <p>
            Få inn flere bestillinger på de rettene du allerede selger mye av.
            Fremhev dine mest solgte retter.
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
