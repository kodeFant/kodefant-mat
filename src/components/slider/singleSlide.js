import React from 'react'
import PropTypes from 'prop-types'

const singleSlide = props => {
  const topHeader = () => {
    return { __html: props.topHeader }
  }
  const bottomHeader = () => {
    return { __html: props.bottomHeader }
  }
  return (
    <div
      className="single-slider bg-img height-100vh d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${props.background})` }}
      data-swiper-slide-index={props.index}
    >
      <div className="slider-content pt-100">
        <div className="slider-content-wrap slider-animated-1">
          <h2 className="animated" dangerouslySetInnerHTML={topHeader()} />
          <h1 className="animated" dangerouslySetInnerHTML={bottomHeader()} />
          <p>{props.paragraph}</p>
          <div className="slider-btn mt-20">
            <a className="animated" href="product-details.html">
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

singleSlide.propTypes = {
  background: PropTypes.string,
  index: PropTypes.number,
  topHeader: PropTypes.string,
  bottomHeader: PropTypes.string,
  paragraph: PropTypes.string,
  buttonText: PropTypes.string,
}

export default singleSlide
