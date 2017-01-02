import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import rootRoutes from './routes/routes'

import './style/style.scss'

const App = ({store, history}) =>
  <Provider store={store}>
    <Router history={history} routes={rootRoutes} />
  </Provider>

export default App
