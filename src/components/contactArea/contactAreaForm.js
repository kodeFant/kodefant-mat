import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import mailgun from '../mailgun/mailgun'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Recaptcha from 'react-recaptcha'

const contactSchema = yup.object().shape({
  name: yup.string().required('Navn er påkrevd'),
  email: yup
    .string()
    .required('En epost-adresse er påkrevd')
    .email('Oppgi en gyldig epost-adresse'),
  subject: yup.string().required('Emnefelt er påkrevd'),
  message: yup
    .string()
    .required('Vennligst legg igjen en beskjed før du sender'),
  recaptcha: yup.string().required('Du må bekrefte at du ikke er en robot'),
})

class ContactAreaForm extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
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
          <Formik
            initialValues={{
              email: '',
              name: '',
              subject: '',
              message: '',
              recaptcha: '',
            }}
            validationSchema={contactSchema}
            onSubmit={values => {
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
                  subject: values.subject,
                  text: `Fra ${values.name} (${values.email}): ${
                    values.message
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
            }}
            render={({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className={`${this.props.styles.contact_form_style} ${
                        this.props.styles.mb_20
                      }`}
                    >
                      <Field
                        type="name"
                        name="name"
                        placeholder="Ditt navn"
                        disabled={isSubmitting}
                      />
                      <ErrorMessage name="name" component="div" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className={`${this.props.styles.contact_form_style} ${
                        this.props.styles.mb_20
                      }`}
                    >
                      <Field
                        type="email"
                        name="email"
                        placeholder="Din e-post-adresse"
                        disabled={isSubmitting}
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className={`${this.props.styles.contact_form_style} ${
                        this.props.styles.mb_20
                      }`}
                    >
                      <Field
                        type="subject"
                        name="subject"
                        placeholder="Emne"
                        disabled={isSubmitting}
                      />
                      <ErrorMessage name="subject" component="div" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className={`
                      ${this.props.styles.contact_form_style}
                      ${this.props.styles.mb_20}
                      `}
                    >
                      <Field
                        component="textarea"
                        name="message"
                        placeholder="Beskjed"
                        disabled={isSubmitting}
                      />
                      <ErrorMessage name="message" component="div" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={this.props.styles.contact_form_style}>
                      <Recaptcha
                        sitekey="6LeucXEUAAAAAGF4rO1y4oh994BwHPThgTZkcs7N"
                        render="explicit"
                        theme="light"
                        verifyCallback={response => {
                          setFieldValue('recaptcha', response)
                        }}
                        onloadCallback={() => {
                          // eslint-disable-next-line no-console
                          console.log('done loading!')
                        }}
                      />
                      <ErrorMessage name="recaptcha" component="div" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={this.props.styles.contact_form_style}>
                      <button
                        className={`${this.props.styles.submit} ${
                          this.props.styles.btn_style
                        }`}
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {!isSubmitting ? 'Send beskjed' : ''}
                      </button>
                    </div>
                  </div>
                </div>
                {isSubmitting ? (
                  <>
                    <h3>Takk. Din beskjed er sendt</h3>
                    <p>
                      Takk for din interesse. Jeg svarer normalt innen en
                      virkedag eller to. Ta gjerne en titt på{' '}
                      <a href="https://www.kodefant.no">kodeFant.no</a>
                    </p>
                  </>
                ) : null}
              </Form>
            )}
          />
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
