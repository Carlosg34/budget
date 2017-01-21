import React from 'react'
import Container from './redux/container'

import AccountSummary from './components/AccountSummary'

const AppLayout = ({children, home, actions}) => (
  <div>
    <AccountSummary />
  </div>
)

export default AppLayout
