import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

// Submenu Item Iterator

const mapSubmenu = submenu => {
  if (submenu) {
    return submenu.map(submenuItem => (
      <li key={submenuItem.id}>
        <Link to={submenuItem.link}>{submenuItem.name}</Link>
      </li>
    ))
  }
}

class MenuItem extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  expandButtonHandler(event) {
    event.preventDefault()
    this.setState({ open: !this.state.open })
  }
  render() {
    const submenu = mapSubmenu(this.props.submenu)
    return (
      <li className={`${this.props.mobile ? '' : this.props.styles.top_hover}`}>
        <Link to={this.props.link}>
          {this.props.name}{' '}
          {this.props.submenu && !this.props.mobile ? (
            <i className="ion-chevron-down" />
          ) : null}
        </Link>
        {this.props.submenu ? (
          <>
            {this.state.open || !this.props.mobile ? (
              <ul className={`${this.props.styles.submenu}`}>{submenu}</ul>
            ) : null}
            {this.props.mobile ? (
              <a
                onClick={this.expandButtonHandler.bind(this)}
                className={`${this.props.styles.mean_expand}`}
                href="#"
                style={{ fontSize: '18px' }}
              >
                +
              </a>
            ) : null}
          </>
        ) : null}
      </li>
    )
  }
}

MenuItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  submenu: PropTypes.array,
  id: PropTypes.number,
  mobile: PropTypes.bool,
  styles: PropTypes.object,
}

export default MenuItem
