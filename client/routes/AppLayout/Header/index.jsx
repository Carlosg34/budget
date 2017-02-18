import React from 'react'
import { Link } from 'react-router'

import AuthSection from './AuthSection/container'

const Header = () =>
  <nav className='pt-navbar pt-fixed-top'>
    <div className='pt-navbar-group pt-align-left'>
      <div className='pt-navbar-heading'>
        <Link to='/accounts'>Budget</Link>
      </div>
    </div>
    <div className='pt-navbar-group pt-align-right'>
      <AuthSection />
    </div>
  </nav>

export default Header
