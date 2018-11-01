import React, { Component } from 'react'
import Swiper from 'react-id-swiper/lib/custom'
import SingleSlide from './singleSlide'

import '../global-css/swiper.css'
import styles from './slider.module.css'

class Slider extends Component {
  render() {
    const nextButton = () => (
      <button className="swiper_button_next">
        <i className="fa fa-angle-left" />
      </button>
    )
    const prevButton = () => (
      <button className="swiper_button_prev">
        <i className="fa fa-angle-right" />
      </button>
    )

    const params = {
      loop: true,
      speed: 1500,
      effect: 'fade',
      navigation: {
        nextEl: `.swiper_button_next`,
        prevEl: `.swiper_button_prev`,
      },
      renderPrevButton: prevButton,
      renderNextButton: nextButton,
    }
    const allSlides = this.props.slides.map(slide => (
      <div key={slide.id}>
        <SingleSlide
          index={slide.index}
          background={slide.background}
          topHeader={slide.topHeader}
          bottomHeader={slide.bottomHeader}
          paragraph={slide.paragraph}
          buttonText={slide.buttonText}
          buttonLink={slide.buttonLink}
          styles={styles}
        />
      </div>
    ))

    return <Swiper {...params}>{allSlides}</Swiper>
  }
}

export default Slider
