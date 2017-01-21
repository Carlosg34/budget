import React from 'react'

import style from './AppLayout.scss'


import Header from './Header'
import SideBar from './SideBar'
import TabsView from './TabsView'

const AppLayout = ({children}) => (
  <div>
    <Header />
    <div className='main'>
      <SideBar />
      <TabsView />
      {children}
    </div>

  </div>
)

export default AppLayout
