import React from 'react'
import { Link } from 'react-router'
// import { Button } from '@blueprintjs/core'

const AuthSection = ({auth}) => {

  if (auth.username) {
    return (
      <div>
        {auth.username}
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Login</Link>{' '}
        <Link to='/create-account'>Create Account</Link>
      </div>
    )
  }

}

export default AuthSection
