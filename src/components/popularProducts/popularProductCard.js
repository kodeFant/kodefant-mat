import React from 'react'
import PropTypes from 'prop-types'
import styles from './popularProductCard.module.css'

const popularProductCard = props => (
  <div className={styles.product_style_wrap}>
    <img alt="" src={props.image} style={{ width: '100%' }} />
    <div className={`${styles.product_content} text-center`}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <span>Kr {props.price.toFixed(2)}</span>
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
