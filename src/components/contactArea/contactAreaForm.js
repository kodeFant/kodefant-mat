import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import mailgun from '../mailgun/mailgun'

class ContactAreaForm extends Component {
  state = {
    name: 'Lillo',
    email: 'lars.lillo@gmail.com',
    subject: 'Hey',
    message: 'Haha',
    nameValid: false,
    emailValid: false,
    subjectValid: false,
    messageValid: false,
    formValid: false,
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  sendForm = event => {
    event.preventDefault()
    axios({
      method: 'post',
      url: `${mailgun.baseUrl}/${mailgun.domain}/messages`,
      auth: {
        username: 'api',
        password: mailgun.apiKey,
      },
      params: {
        from: 'postmaster@mg.kodefant.no',
        to: 'lillo@kodefant.no',
        subject: this.state.subject,
        text: `Fra ${this.state.name} (${this.state.email}): ${
          this.state.message
        }`,
      },
    }).then(
      response => {
        // eslint-disable-next-line no-console
        console.log(response)
      },
      reject => {
        // eslint-disable-next-line no-console
        console.log(reject)
      }
    )
  }

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
                  <input
                    name="name"
                    placeholder="Fullt navn"
                    type="text"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
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
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className={`${this.props.styles.contact_form_style} ${
                    this.props.styles.mb_20
                  }`}
                >
                  <input
                    name="subject"
                    placeholder="Emne"
                    type="text"
                    value={this.state.subject}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={this.props.styles.contact_form_style}>
                  <textarea
                    name="message"
                    placeholder="Beskjed"
                    value={this.state.message}
                    onChange={this.onChange}
                    required
                  />
                  <button
                    className={`${this.props.styles.submit} ${
                      this.props.styles.btn_style
                    }`}
                    onClick={this.sendForm}
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
