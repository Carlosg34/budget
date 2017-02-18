import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'

import CreateAccountForm from './CreateAccountForm.jsx'
import './CreateAccount.scss'


class CreateAccount extends Component {
  render() {
    const { auth, actions } = this.props

    return (
      <div className='login__container pt-card'>
        <h2>Create Account</h2>
        {auth.username &&
          <div>
            <p>You are logged in as: {auth.username}</p>

            <div className='button-row'>
              <Button
                className='pt-intent-primary'
                text='Logout'
                iconName='log-out'
                onClick={actions.logout} />
            </div>

          </div>
        }

        {!auth.username &&
          <CreateAccountForm actions={actions} />
        }
      </div>
    )
  }
}


export default CreateAccount
