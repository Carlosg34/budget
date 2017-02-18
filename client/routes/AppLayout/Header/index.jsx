import React from 'react'

import AuthSection from './AuthSection/container'

const Header = () =>
  <nav className='pt-navbar pt-fixed-top'>
    <div className='pt-navbar-group pt-align-left'>
      <div className='pt-navbar-heading'>Budget</div>
    </div>
    <div className='pt-navbar-group pt-align-right'>
      <AuthSection />
    </div>
  </nav>

export default Header
