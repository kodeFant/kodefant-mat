import React from 'react'
import placeholderIMG from '../../images/banner/breath.jpg'

const breadcrumb = () => (
  <div
    className="breadcrumb-area bg-img ptb-80"
    style={{ backgroundImage: `url(${placeholderIMG})` }}
  >
    <div className="container">
      <div className="breadcrumb-content text-center">
        <h3>menu</h3>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="active">menu page </li>
        </ul>
      </div>
    </div>
  </div>
)

export default breadcrumb
