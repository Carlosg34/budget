import React from 'react'

const Header = () =>
  <nav className='pt-navbar pt-fixed-top'>
    <div className='pt-navbar-group pt-align-left'>
      <div className='pt-navbar-heading'>Budget</div>
    </div>
    <div className='pt-navbar-group pt-align-right'>
      <button className='pt-button pt-minimal pt-icon-home'>Home</button>
      <button className='pt-button pt-minimal pt-icon-document'>Import</button>
      <span className='pt-navbar-divider'></span>
      <button className='pt-button pt-minimal pt-icon-user'></button>
      <button className='pt-button pt-minimal pt-icon-notifications'></button>
      <button className='pt-button pt-minimal pt-icon-cog'></button>
    </div>
  </nav>

export default Header
