import React from 'react'
import { Link } from 'react-router'
import { Popover, Menu, MenuItem, Position } from '@blueprintjs/core'

const AuthSection = ({auth, actions}) => {

  if (auth.username) {
    return (
      <div>

        <Popover
          content={
            <Menu>
              <MenuItem
                iconName='log-out'
                text='Logout'
                onClick={actions.logout} />
            </Menu>
          }
          position={Position.BOTTOM_RIGHT}>
          <a>{auth.username}</a>
        </Popover>

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
