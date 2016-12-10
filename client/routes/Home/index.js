import React from 'react'
import Container from './redux/container'

const AppLayout = ({children, home, actions}) =>
  <div>
    This is my app. Do you like it? Why doesn't it reload?
    <div>
      {home.value}
      <button onClick={actions.add}>add</button>
    </div>
    {children}
  </div>

export default AppLayout
