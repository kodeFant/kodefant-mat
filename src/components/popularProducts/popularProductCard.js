import React from 'react'
import PropTypes from 'prop-types'

const popularProductCard = props => (
  <div className="product-style-wrap">
    <img alt="" src={props.image} style={{ width: '100%' }} />
    <div className="product-content text-center">
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <span>${props.price.toFixed(2)}</span>
    </div>
  </div>
)

popularProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
}

export default popularProductCard
