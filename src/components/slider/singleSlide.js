import React from 'react'
import { Link } from 'gatsby'
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
      className={`
      ${props.styles.bg_img}
      ${props.styles.single_slider}
      ${props.styles.height_100vh}
      d-flex
      align-items-center
      justify-content-center`}
      style={{ backgroundImage: `url(${props.background})` }}
      data-swiper-slide-index={props.index}
    >
      <div className={`${props.styles.slider_content} ${props.styles.pt_100}`}>
        <div
          className={`${props.styles.slider_content_wrap} ${
            props.styles.slider_animated_1
          }`}
        >
          <h2 className="animated" dangerouslySetInnerHTML={topHeader()} />
          <h1 className="animated" dangerouslySetInnerHTML={bottomHeader()} />
          <p>{props.paragraph}</p>
          <div className={`${props.styles.slider_btn} ${props.styles.mt_20}`}>
            <Link className="animated" to={props.buttonLink}>
              {props.buttonText}
            </Link>
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
  buttonLink: PropTypes.string,
  styles: PropTypes.object,
}

export default singleSlide
