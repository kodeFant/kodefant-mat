import React from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import SingleSlide from './singleSlide'

import './slider.css'

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
      />
    </div>
  ))

  return <Swiper {...params}>{allSlides}</Swiper>
}

export default slider
