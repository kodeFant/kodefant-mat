import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactAreaForm extends Component {
  render() {
    return (
      <div className={this.props.styles.contact_message_wrapper}>
        <h4
          className={`${this.props.styles.contact_title} ${
            this.props.styles.mb_25
          }`}
        >
          Interessert i nettside for restauranten? Ta kontakt.
        </h4>
        <div className={this.props.styles.contact_message}>
          <form id="contact-form">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className={`${this.props.styles.contact_form_style} ${
                    this.props.styles.mb_20
                  }`}
                >
                  <input name="name" placeholder="Fullt navn" type="text" />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className={`${this.props.styles.contact_form_style} ${
                    this.props.styles.mb_20
                  }`}
                >
                  <input
                    name="email"
                    placeholder="Epost-adresse"
                    type="email"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className={`${this.props.styles.contact_form_style} ${
                    this.props.styles.mb_20
                  }`}
                >
                  <input name="emne" placeholder="Emne" type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={this.props.styles.contact_form_style}>
                  <textarea name="message" placeholder="Beskjed" />
                  <button
                    className={`${this.props.styles.submit} ${
                      this.props.styles.btn_style
                    }`}
                    type="submit"
                  >
                    Send beskjed
                  </button>
                </div>
              </div>
            </div>
          </form>
          <p className="form-message" />
        </div>
      </div>
    )
  }
}

ContactAreaForm.propTypes = {
  styles: PropTypes.object,
}

export default ContactAreaForm
