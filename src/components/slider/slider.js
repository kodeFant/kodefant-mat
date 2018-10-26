import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import SingleSlide from './singleSlide'

import '../global-css/swiper.css'
import styles from './slider.module.css'

const slider = props => {
  const params = {
    loop: true,
    speed: 800,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }
  const allSlides = props.slides.map(slide => (
    <div key={slide.id}>
      <SingleSlide
        index={slide.index}
        background={slide.background}
        topHeader={slide.topHeader}
        bottomHeader={slide.bottomHeader}
        paragraph={slide.paragraph}
        buttonText={slide.buttonText}
        styles={styles}
      />
    </div>
  ))

  return <Swiper {...params}>{allSlides}</Swiper>
}

export default slider
