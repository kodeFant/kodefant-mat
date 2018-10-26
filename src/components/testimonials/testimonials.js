import React, { Component } from 'react'
import Swiper from 'react-id-swiper'

import styles from './testimonials.module.css'

import testimonialImage1 from '../../images/team/tesi-1.png'
import testimonialImage2 from '../../images/team/tesi-2.png'

class Testimonials extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallerySwiper: null,
      thumbnailSwiper: null,
    }

    this.galleryRef = this.galleryRef.bind(this)
    this.thumbRef = this.thumbRef.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState

      gallerySwiper.controller.control = thumbnailSwiper
      thumbnailSwiper.controller.control = gallerySwiper
      return true
    }
    return false
  }

  galleryRef(ref) {
    if (ref) this.setState({ gallerySwiper: ref.swiper })
  }

  thumbRef(ref) {
    if (ref) this.setState({ thumbnailSwiper: ref.swiper })
  }
  render() {
    const gallerySwiperParams = {
      spaceBetween: 10,
      slideActiveClass: styles.slick_current,
      slidesPerView: 3,
      centeredSlides: true,
      slideToClickedSlide: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 50,
          centeredSlides: false,
          freeModeSticky: true,
        },
        420: {
          slidesPerView: 1,
        },
      },
    }

    const thumbnailSwiperParams = {
      slideActiveClass: styles.active_img,
      paceBetween: 10,
      centeredSlides: true,
      slidesPerView: 3,
      touchRatio: 0.2,
      slideToClickedSlide: false,
      loop: true,
    }
    return (
      <div className={`testimonial-area ${styles.ptb_100} gray-bg`}>
        <div className="container">
          <div
            className={`${styles.section_title} text-center ${styles.mb_50}`}
          >
            <h2>what people say</h2>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim nostrud exercitation ullamco laboris nisi.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-image-slider text-center">
                <Swiper {...gallerySwiperParams} ref={this.galleryRef}>
                  <div className={styles.single_testi_text}>
                    <p>
                      The point of using Lorem Ipsum is that more-or-less normal
                      distribution of letters, as opposed to using
                    </p>
                  </div>
                  <div className={styles.single_testi_text}>
                    <p>
                      The point of using Lorem Ipsum is that more-or-less normal
                      distribution of letters, as opposed to using
                    </p>
                  </div>
                  <div className={styles.single_testi_text}>
                    <p>
                      The point of using Lorem Ipsum is that more-or-less normal
                      distribution of letters, as opposed to using
                    </p>
                  </div>
                  <div className={styles.single_testi_text}>
                    <p>
                      The point of using Lorem Ipsum is that more-or-less normal
                      distribution of letters, as opposed to using
                    </p>
                  </div>
                </Swiper>
              </div>
              <div className="testimonial-text-slider text-center">
                <Swiper {...thumbnailSwiperParams} ref={this.thumbRef}>
                  <div className={styles.single_testi_img}>
                    <img src={testimonialImage1} alt="testi 1" />
                    <h3>William Patel</h3>
                    <h5>customer</h5>
                  </div>
                  <div className={styles.single_testi_img}>
                    <img src={testimonialImage2} alt="testi 1" />
                    <h3>Diane Walsh</h3>
                    <h5>customer</h5>
                  </div>
                  <div className={styles.single_testi_img}>
                    <img src={testimonialImage1} alt="testi 1" />
                    <h3>Carl Carr</h3>
                    <h5>customer</h5>
                  </div>
                  <div className={styles.single_testi_img}>
                    <img src={testimonialImage2} alt="testi 1" />
                    <h3>Linda Nelson</h3>
                    <h5>customer</h5>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
