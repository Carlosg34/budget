import React from 'react'
import { Link } from 'react-router'
import { Popover, Menu, MenuItem, Position, Button } from '@blueprintjs/core'

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
          <Button text={auth.username} rightIconName="cog" />
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
