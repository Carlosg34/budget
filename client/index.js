// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'

import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createHistory } from 'history'
import { useRouterHistory } from 'react-router'
import rootReducer from './store/reducer'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const browserHistory = useRouterHistory(createHistory)({ basename: '/' })
const boundRouterMiddleware = routerMiddleware(browserHistory)
const createStoreWithMiddleware = applyMiddleware(boundRouterMiddleware)(createStore)
const store = createStoreWithMiddleware(rootReducer, window.devToolsExtension && window.devToolsExtension())
const history = syncHistoryWithStore(browserHistory, store)

import { FocusStyleManager } from '@blueprintjs/core'
FocusStyleManager.onlyShowFocusOnTabs()

const mountPoint = document.getElementById('root')

render((
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>
), mountPoint)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render((
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>
    ), mountPoint)
  })
}
