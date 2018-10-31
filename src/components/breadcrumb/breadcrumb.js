import React from 'react'
import placeholderIMG from '../../images/banner/breath.jpg'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const breadcrumb = props => (
  <div
    className="breadcrumb-area bg-img ptb-80"
    style={
      props.background
        ? { backgroundImage: `url(${props.background})` }
        : { backgroundImage: `url(${placeholderIMG})` }
    }
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
  </div>
)

breadcrumb.propTypes = {
  title: PropTypes.string,
  parent: PropTypes.string,
  background: PropTypes.string,
}

export default breadcrumb
