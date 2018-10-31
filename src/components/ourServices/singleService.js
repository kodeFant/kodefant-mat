import React from 'react'
import PropTypes from 'prop-types'

const singleService = props => (
  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
    <div
      className={`${props.styles.single_service} text-center ${
        props.styles.mb_30
      }`}
    >
      <i className={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  </div>
)

singleService.propTypes = {
  styles: PropTypes.object,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default singleService
