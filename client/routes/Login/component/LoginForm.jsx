import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button } from '@blueprintjs/core'
import RenderInput from 'common/RenderInput'

const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  } else if(values.username.length < 3) {
    errors.username = 'Must be at least 3 characters'
  } else if(values.username.length > 10) {
    errors.username = 'Must be less than 10 characters'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if(values.password.length < 8) {
    errors.password = 'Must be at least 8 characters'
  } else if(values.password.length > 30) {
    errors.password = 'Must be less than 30 characters'
  }

  return errors
}

class LoginForm extends Component {
  onSubmit = (values) => {
    return new Promise((resolve, reject) => {
      this.props.actions.login(values, resolve, reject)
    })
  }

  render () {
    const { handleSubmit, invalid, submitting, error } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>

        <Field
          name='username'
          component={RenderInput}
          type='text'
          label='Username' />

        <Field
          name='password'
          component={RenderInput}
          type='password'
          label='Password' />

        {error &&
          <div className='error-text'>
            {error}
          </div>
        }

        <div className='button-row'>
          <Button
            className='pt-intent-primary'
            type='submit'
            text='Login'
            iconName='log-in'
            loading={submitting}
            disabled={invalid}/>
        </div>

      </form>
    )

  }
}


LoginForm = reduxForm({
  form: 'login',
  validate: validate
})(LoginForm)

export default LoginForm
