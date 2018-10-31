import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'

import mapMarker from '../../images/icon-img/map.png'

const RestaurantMarker = () => <img src={mapMarker} />

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.914116,
      lng: 10.752227,
    },
    zoom: 14,
  }

  render() {
    return (
      <div
        className={`${this.props.styles.pt_100} ${this.props.styles.pb_100}`}
      >
        <div id={this.props.styles.googleMap}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBd8BRwMKRgSHcdb-CSgZa8pM7fvWKj8a8',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <RestaurantMarker lat={59.914116} lng={10.752227} />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

SimpleMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  text: PropTypes.string,
  styles: PropTypes.object,
}

RestaurantMarker.propTypes = {
  text: PropTypes.string,
}

export default SimpleMap
