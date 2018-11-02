import React from 'react'
import placeholderIMG from '../../images/banner/breath.jpg'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Parallax } from 'react-parallax'

const breadcrumb = props => (
  <Parallax
    bgImage={props.background ? props.background : placeholderIMG}
    strength={400}
    className="breadcrumb-area bg-img ptb-80"
  >
    <div className="container">
      <div className="breadcrumb-content text-center">
        <h3>{props.title}</h3>
        <ul>
          <li>
            <Link to="/">{props.parent}</Link>
          </li>
          <li className="active">{props.title}</li>
        </ul>
      </div>
    </div>
  </Parallax>
)

breadcrumb.propTypes = {
  title: PropTypes.string,
  parent: PropTypes.string,
  background: PropTypes.string,
}

export default breadcrumb
