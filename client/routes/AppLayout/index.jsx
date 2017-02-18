import React from 'react'

import './AppLayout.scss'

import Header from './Header'

const AppLayout = ({children}) => (
  <div>
    <Header />
    <div className='main'>
      {children}
    </div>
  </div>
)

export default AppLayout
